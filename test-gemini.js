import fs from 'fs';

const envFile = fs.readFileSync('.env.local', 'utf8');
const match = envFile.match(/VITE_GEMINI_API_KEY=(.*)/);
const key = match ? match[1].trim() : '';

const MODEL = "gemini-2.5-flash";
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}`;
const url = `${BASE_URL}:streamGenerateContent?alt=sse&key=${key}`;

const systemPrompt = "You are a test assistant.";
const userMessage = "Hello world";

const body = {
  system_instruction: {
    parts: [{ text: systemPrompt }],
  },
  contents: [
    {
      role: "user",
      parts: [{ text: userMessage }],
    }
  ],
  generationConfig: {
    temperature: 0.7,
    maxOutputTokens: 1024,
    topP: 0.9,
  },
};

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
})
  .then(async res => {
    console.log("Status:", res.status);
    if (!res.ok) {
      console.log("Error body:", await res.text());
    } else {
      console.log("Success! body received:", (await res.text()).substring(0, 500));
    }
  })
  .catch(err => console.error("Fetch failed:", err));
