// Gemini API helpers — uses gemini-2.5-flash via REST API
// No SDK needed, direct fetch calls from the browser

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = "gemini-2.5-flash";
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}`;

interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

/**
 * Stream a chat response from Gemini.
 * Yields text chunks as they arrive.
 */
export async function* streamChat(
  systemPrompt: string,
  messages: GeminiMessage[]
): AsyncGenerator<string> {
  const url = `${BASE_URL}:streamGenerateContent?alt=sse&key=${API_KEY}`;

  const body = {
    system_instruction: {
      parts: [{ text: systemPrompt }],
    },
    contents: messages,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
      topP: 0.9,
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} — ${error}`);
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
 * Generate a cover letter (non-streaming, returns full text).
 */
export async function generateText(
  systemPrompt: string,
  userMessage: string
): Promise<string> {
  const url = `${BASE_URL}:generateContent?key=${API_KEY}`;

  const body = {
    system_instruction: {
      parts: [{ text: systemPrompt }],
    },
    contents: [
      {
        role: "user",
        parts: [{ text: userMessage }],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2048,
      topP: 0.9,
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} — ${error}`);
  }

  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
}
