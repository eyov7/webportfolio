import Groq from "groq";
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    // Read the context file
    const contextPath = path.join(process.cwd(), 'src', 'data', 'ai-context.md');
    const contextContent = fs.readFileSync(contextPath, 'utf8');
    
    console.log('Using Groq Mixtral model');
    console.log('Context length:', contextContent.length);

    const messages = [
      {
        role: "system",
        content: `You are an AI assistant for Ever Olivares. Be professional but friendly. Use the following context to inform your responses:\n\n${contextContent}`
      },
      {
        role: "user",
        content: req.body.message
      }
    ];

    console.log('Sending request to Groq API...');
    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: "mixtral-8x7b-32768",
      temperature: 0.7,
      max_tokens: 1000,
      stream: false
    });

    console.log('Received response from Groq API');
    const response = chatCompletion.choices[0].message.content;
    console.log('Response length:', response.length);

    return res.status(200).json({ response });
  } catch (error) {
    console.error('Error in chat handler:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
}