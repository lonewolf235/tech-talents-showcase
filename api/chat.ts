// Vercel Serverless Function — streaming chat proxy for Gemini API
// Keeps the API key on the server, never exposed to the browser

import type { VercelRequest, VercelResponse } from "@vercel/node";

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-2.5-flash";
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!API_KEY) {
    return res.status(500).json({ error: "GEMINI_API_KEY not configured on server" });
  }

  try {
    const { systemPrompt, messages } = req.body;

    if (!systemPrompt || !messages) {
      return res.status(400).json({ error: "Missing systemPrompt or messages" });
    }

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

    const geminiResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      return res.status(geminiResponse.status).json({
        error: `Gemini API error: ${geminiResponse.status}`,
        details: errorText,
      });
    }

    // Stream the SSE response through to the client
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const reader = geminiResponse.body?.getReader();
    if (!reader) {
      return res.status(500).json({ error: "No response body from Gemini" });
    }

    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      res.write(chunk);
    }

    res.end();
  } catch (error: any) {
    console.error("Chat API error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
}
