import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    // Read the context from the public folder
    const contextPath = path.join(process.cwd(), 'public/webportfolio context.md');
    const context = fs.readFileSync(contextPath, 'utf8');

    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    const prompt = `You are an AI assistant representing Ever Olivares. Use this context to inform your responses:

${context}

Please respond in a professional yet friendly manner, drawing from the above context to provide accurate and relevant information about Ever Olivares.

User question: ${req.body.message}`;

    const result = await chat.sendMessage(prompt);
    return res.status(200).json({ response: result.response.text() });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}