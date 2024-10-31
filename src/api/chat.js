import Groq from "groq";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const context = `You are an AI assistant for Ever Olivares. You have access to his portfolio website content and should answer questions about his background, skills, and projects. Be professional but friendly. Here's some information about Ever:
    
    Current role: Machine Learning and AI graduate student
    Background: Applied Mathematics
    Key skills: Machine Learning, AI, Full-stack Development, Audio Engineering
    Projects: Working on savings app prototype, open source music citation standard, and boba business web/mobile development`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: context,
        },
        {
          role: "user",
          content: req.body.message,
        },
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.7,
      max_tokens: 1000,
    });

    return res.status(200).json({ 
      response: chatCompletion.choices[0].message.content 
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}