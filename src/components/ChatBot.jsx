import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "./ui/use-toast";

const PERSONAL_CONTEXT = `
I'm a Machine Learning and AI graduate student with a background in Applied Mathematics. 
Currently working on:
- A savings app prototype
- Open source music citation standard
- Boba business web/mobile development
I produce music (house and reggaeton) using Ableton and Logic Pro.
I'm passionate about combining technology with creativity.
`;

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = {
        role: 'assistant',
        content: generateResponse(input, PERSONAL_CONTEXT)
      };
      
      setMessages(prev => [...prev, response]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from the chatbot",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-lg shadow-lg">
      <div className="p-4">
        <h3 className="font-semibold mb-4 text-primary text-shadow-glow">Ask me anything about Ever!</h3>
        <ScrollArea className="h-[300px] mb-4">
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground shadow-glow text-shadow-glow'
                      : 'bg-muted text-foreground shadow-soft text-shadow-glow'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="border-primary/50 focus:border-primary text-shadow-glow"
          />
          <Button type="submit" disabled={isLoading} className="shadow-glow-sm text-shadow-glow">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

// Simple response generation based on keywords
const generateResponse = (input, context) => {
  const lowercaseInput = input.toLowerCase();
  
  if (lowercaseInput.includes('background') || lowercaseInput.includes('education')) {
    return "I'm a Machine Learning and AI graduate student with a background in Applied Mathematics.";
  }
  
  if (lowercaseInput.includes('project') || lowercaseInput.includes('working on')) {
    return "I'm currently working on several projects: a savings app prototype, an open source music citation standard, and web/mobile development for a boba business.";
  }
  
  if (lowercaseInput.includes('music') || lowercaseInput.includes('produce')) {
    return "I produce house music and reggaeton using Ableton and Logic Pro. I love combining technology with creativity!";
  }
  
  if (lowercaseInput.includes('skill') || lowercaseInput.includes('technology')) {
    return "My skills include Machine Learning, AI, Applied Mathematics, Full-stack Development, and Audio Engineering.";
  }
  
  return "I'm Ever's AI assistant. You can ask me about his background, projects, skills, or music production work!";
};

export default ChatBot;