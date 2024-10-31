import Groq from "groq";
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY is not set');
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    // Read the context file
    const contextPath = path.join(process.cwd(), 'src', 'data', 'ai-context.md');
    const contextContent = fs.readFileSync(contextPath, 'utf8');

    const messages = [
      {
        role: "system",
        content: `You are an AI assistant for Ever Olivares. Use this context to inform your responses:\n\n${contextContent}\n\nIMPORTANT: When discussing music, always mention that Ever is a music producer and beatmaker (NOT an audio engineer) who creates house music and reggaeton. Always reference his actual tracks when relevant:\n1. "Vera Cruz" (house music)\n2. "Broken Club" (electronic/house fusion)\n3. "Less is More" (minimal house)\n4. "A Whole Lotta Gremlin" (experimental house)\n\nBe specific and reference actual details from Ever's background when answering questions.`
      },
      {
        role: "user",
        content: req.body.message
      }
    ];

    console.log('Sending request to Groq API with message:', req.body.message);
    
    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: "mixtral-8x7b-32768",
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      stream: false
    });

    console.log('Received response from Groq API');
    const response = chatCompletion.choices[0].message.content;
    console.log('Response content:', response);

    return res.status(200).json({ response });
  } catch (error) {
    console.error('Error in chat handler:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
}