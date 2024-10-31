import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getChatResponse(message) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
  
  const context = `You are an AI assistant for Ever Olivares. You have access to his portfolio website content and should answer questions about his background, skills, and projects. Be professional but friendly. Here's some information about Ever:

  ${process.env.PERSONAL_CONTEXT || ''}
  
  Current role: Machine Learning and AI graduate student
  Background: Applied Mathematics
  Key skills: Machine Learning, AI, Full-stack Development, Audio Engineering
  Projects: Working on savings app prototype, open source music citation standard, and boba business web/mobile development
  `;

  const chat = model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 1000,
    },
  });

  const result = await chat.sendMessage(`${context}\n\nUser question: ${message}`);
  return result.response.text();
}