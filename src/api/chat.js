import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    if (!process.env.GROK_API_KEY) {
      throw new Error('GROK_API_KEY is not set');
    }

    // Read the context file
    const contextPath = path.join(process.cwd(), 'src', 'data', 'ai-context.md');
    const contextContent = fs.readFileSync(contextPath, 'utf8');

    const response = await fetch('https://api.grok.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROK_API_KEY}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: `You are an AI assistant for Ever Olivares. Use this context to inform your responses:\n\n${contextContent}`
          },
          {
            role: "user",
            content: req.body.message
          }
        ],
        model: "grok-1",
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json({ 
      response: data.choices[0].message.content 
    });

  } catch (error) {
    console.error('Error in chat handler:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
}