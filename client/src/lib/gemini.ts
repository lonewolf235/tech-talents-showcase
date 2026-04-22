// Gemini API helpers — calls go through our Vercel serverless API routes
// The API key never touches the browser; it stays on the server

interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

/**
 * Stream a chat response via our server-side proxy.
 * Yields text chunks as they arrive.
 */
export async function* streamChat(
  systemPrompt: string,
  messages: GeminiMessage[]
): AsyncGenerator<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ systemPrompt, messages }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error: ${response.status} — ${error}`);
  }

  const reader = response.body?.getReader();
  if (!reader) throw new Error("No response body");

  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (const line of lines) {
      if (line.startsWith("data: ")) {
        const data = line.slice(6).trim();
        if (data === "[DONE]") return;
        try {
          const parsed = JSON.parse(data);
          const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) yield text;
        } catch {
          // Skip malformed chunks
        }
      }
    }
  }
}

/**
 * Generate text (non-streaming) via our server-side proxy.
 * Used for cover letters, tech explanations, etc.
 */
export async function generateText(
  systemPrompt: string,
  userMessage: string
): Promise<string> {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ systemPrompt, userMessage }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error: ${response.status} — ${error}`);
  }

  const data = await response.json();
  return data.text || "No response generated.";
}
