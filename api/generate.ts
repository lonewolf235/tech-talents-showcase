// Vercel Serverless Function — non-streaming text generation proxy for Gemini API
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
    const { systemPrompt, userMessage } = req.body;

    if (!systemPrompt || !userMessage) {
      return res.status(400).json({ error: "Missing systemPrompt or userMessage" });
    }

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

    const data = await geminiResponse.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated.";

    return res.status(200).json({ text });
  } catch (error: any) {
    console.error("Generate API error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
}
