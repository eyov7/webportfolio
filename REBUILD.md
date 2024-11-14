# Portfolio App Rebuild Guide

This guide contains instructions and code to rebuild the portfolio application from scratch.

## Project Structure

```
├── public/
│   ├── OctResume2024.docx.pdf
│   ├── bg.png
│   ├── favicon.ico
│   ├── og-image.svg
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── ChatBot.jsx
│   │   ├── TrackList.jsx
│   │   ├── SocialLinks.jsx
│   │   └── ui/
│   ├── styles/
│   │   ├── social.css
│   │   └── main.css
│   ├── data/
│   │   └── ai-context.md
│   ├── lib/
│   │   └── utils.js
│   └── main.jsx
├── .env.example
├── index.html
├── README.md
└── package.json
```

## Step 1: Initialize Project

First, create a new Vite project with React:

```bash
npm create vite@latest portfolio-app -- --template react
cd portfolio-app
```

## Step 2: Install Dependencies

```bash
npm install @google/generative-ai@^0.21.0 @hookform/resolvers@^3.6.0 @radix-ui/react-accordion@^1.2.0 @radix-ui/react-alert-dialog@^1.1.0 @radix-ui/react-aspect-ratio@^1.1.0 @radix-ui/react-avatar@^1.1.0 @radix-ui/react-checkbox@^1.1.0 @radix-ui/react-collapsible@^1.1.0 @radix-ui/react-context-menu@^2.2.0 @radix-ui/react-dialog@^1.1.0 @radix-ui/react-dropdown-menu@^2.1.0 @radix-ui/react-hover-card@^1.1.0 @radix-ui/react-label@^2.1.0 @radix-ui/react-menubar@^1.1.0 @radix-ui/react-navigation-menu@^1.2.0 @radix-ui/react-popover@^1.1.0 @radix-ui/react-progress@^1.1.0 @radix-ui/react-radio-group@^1.2.0 @radix-ui/react-scroll-area@^1.1.0 @radix-ui/react-select@^2.1.0 @radix-ui/react-separator@^1.1.0 @radix-ui/react-slider@^1.2.0 @radix-ui/react-slot@^1.1.0 @radix-ui/react-switch@^1.1.0 @radix-ui/react-tabs@^1.1.0 @radix-ui/react-toast@^1.2.0 @radix-ui/react-toggle@^1.1.0 @radix-ui/react-toggle-group@^1.1.0 @radix-ui/react-tooltip@^1.1.0 @tanstack/react-query@^5.48.0 class-variance-authority@^0.7.0 clsx@^2.1.0 cmdk@^1.0.0 date-fns@^3.6.0 dotenv@^16.4.5 embla-carousel-react@^8.1.5 framer-motion@^11.3.9 groq@^3.62.3 html-to-image@^1.11.11 input-otp@^1.2.4 lucide-react@^0.451.0 next-themes@^0.3.0 react-day-picker@^8.10.1 react-hook-form@^7.52.0 react-resizable-panels@^2.0.19 react-router-dom@^6.23.1 recharts@^2.12.7 sonner@^1.5.0 tailwind-merge@^2.2.1 tailwindcss-animate@^1.0.7 vaul@^0.9.1 zod@^3.23.8
```

## Step 3: Core Files

### 1. Environment Configuration (.env.example)
```env
GEMINI_API_KEY=your_api_key_here
PERSONAL_CONTEXT="Additional personal notes and context about you that isn't on the website"
```

### 2. Main HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>4ever20</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="src/styles/social.css">
</head>
<body>
  <div class="wrapper">
    <details open>
      <summary class="section-title">Welcome to My Digital Portfolio</summary>
      <section id="about" class="box">
        <h2 class="text-shadow-glow">Welcome to My Digital Portfolio</h2>
        
        <ul class="list-disc pl-6 space-y-6 font-verdana text-xl text-black text-shadow-glow">
          <li>Hi! I'm currently pursuing my master's degree in Machine Learning and AI, exploring the intersection of technology and creativity. This space is where I share my musical journey alongside my academic pursuits. With a strong foundation in Applied Mathematics, focusing on Science and Engineering, I've developed the technical expertise needed for the AI industry. This background complements my current studies in artificial intelligence perfectly.</li>
          
          <li>On the musical side, I'm diving deep into house music arrangement while building upon my experience in reggaeton production. You'll find me crafting beats in either Ableton or Logic Pro, my go-to Digital Audio Workstations.</li>
        </ul>
        
        <div class="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/wawMjJUCMVw?start=28&end=88"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </details>

    <details>
      <summary class="section-title">AI Demos</summary>
      <section id="ai-demos" class="box">
        <h2 class="text-shadow-glow">Interactive AI Demos</h2>
        
        <h3 class="text-shadow-glow mb-4">Audio to STEM Demo</h3>
        <div class="video-container mb-8">
          <iframe
            src="https://eyov-aud2stm2mdi.hf.space"
            width="100%"
            height="800"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </div>

        <h3 class="text-shadow-glow mb-4">Lyric Extractor Demo</h3>
        <div class="video-container">
          <iframe
            src="https://eyov-lyricextractor.hf.space"
            width="100%"
            height="800"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </details>

    <details>
      <summary class="section-title">AI/ML Research Work</summary>
      <section id="ai-ml" class="box">
        <h2 class="text-shadow-glow mb-6">AI/ML Research Work</h2>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">Video Presentation</AccordionTrigger>
            <AccordionContent>
              <div class="p-4 bg-white/10 rounded-lg">
                <iframe
                  src="https://drive.google.com/file/d/1EBDUrAf-_9vkd78ckQznH-EXS4wnqpR1/preview"
                  width="100%"
                  height="400"
                  allow="autoplay"
                  className="rounded-md"
                ></iframe>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">Literature Review Slides</AccordionTrigger>
            <AccordionContent>
              <div class="p-4 bg-white/10 rounded-lg">
                <iframe
                  src="https://docs.google.com/presentation/d/1wc6EHC_ufz7UDcC2w9fDudTtzXiwO4S0VUHWYaUqlx0/embed?start=false&loop=false&delayms=3000"
                  width="100%"
                  height="400"
                  allowFullScreen={true}
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  className="rounded-md"
                ></iframe>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">Additional Research Presentation 1</AccordionTrigger>
            <AccordionContent>
              <div class="p-4 bg-white/10 rounded-lg">
                <iframe
                  src="https://drive.google.com/file/d/15Cy67bJUltmxy1GBtzsCv2FKjsfdUC4d/preview"
                  width="100%"
                  height="400"
                  allow="autoplay"
                  className="rounded-md"
                ></iframe>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold">Additional Research Presentation 2</AccordionTrigger>
            <AccordionContent>
              <div class="p-4 bg-white/10 rounded-lg">
                <iframe
                  src="https://drive.google.com/file/d/1HF29uvqvu6HUlMUfqqCxx7J3t5hFW1BQ/preview"
                  width="100%"
                  height="400"
                  allow="autoplay"
                  className="rounded-md"
                ></iframe>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </details>

    <details>
      <summary class="section-title">My Resume</summary>
      <section id="resume" class="box">
        <h2 class="text-shadow-glow">My Resume</h2>
        <div class="pdf-container">
          <iframe
            src="./NovResume2024.docx.pdf?v=1"
            width="100%"
            height="600px"
            style="border: none;"
          >
            <p>Unable to display PDF file. <a href="./NovResume2024.docx.pdf?v=1" target="_blank" class="text-white">Download Instead</a></p>
          </iframe>
        </div>
        <div id="resume-download" class="flex justify-center items-center p-4">
          <a href="./NovResume2024.docx.pdf" target="_blank" class="resume-button text-white hover:text-white">
            Download Resume
          </a>
        </div>
      </section>
    </details>

    <details>
      <summary class="section-title">Featured Tracks</summary>
      <section id="music" class="box">
        <h2 class="text-shadow-glow">Featured Tracks</h2>
        <div id="track-list" class="w-full"></div>
      </section>
    </details>
    
    <div id="chat-bot"></div>
    <div id="social-links"></div>
  </div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

### 3. Main Component (src/main.jsx)
```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import TrackList from './components/TrackList';
import ChatBot from './components/ChatBot';
import SocialLinks from './components/SocialLinks';
import '../style.css';

const trackListContainer = document.getElementById('track-list');
if (trackListContainer) {
  const root = createRoot(trackListContainer);
  root.render(
    <React.StrictMode>
      <TrackList />
    </React.StrictMode>
  );
}

const chatBotContainer = document.getElementById('chat-bot');
if (chatBotContainer) {
  const root = createRoot(chatBotContainer);
  root.render(
    <React.StrictMode>
      <ChatBot />
    </React.StrictMode>
  );
}

const socialLinksContainer = document.getElementById('social-links');
if (socialLinksContainer) {
  const root = createRoot(socialLinksContainer);
  root.render(
    <React.StrictMode>
      <SocialLinks />
    </React.StrictMode>
  );
}
```

### 4. ChatBot Component (src/components/ChatBot.jsx)
```jsx
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "./ui/use-toast";

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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: input,
          context: true
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response,
        timestamp: new Date().toISOString()
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "Error",
        description: "Failed to get response from the chatbot. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-lg shadow-lg">
      <div className="p-4">
        <h3 className="font-bold mb-2 text-black border-b pb-2">Ask me anything about Ever!</h3>
        <p className="text-sm text-gray-600 mb-4 border rounded-md p-2 bg-white/50">
          Powered by Groq's Mixtral model. This AI assistant has access to Ever's website content and personal background to provide accurate responses.
        </p>
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
                      ? 'bg-primary text-primary-foreground border border-primary/20'
                      : 'bg-muted text-black border border-gray-200'
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
            className="border-primary/50 focus:border-primary text-black"
          />
          <Button type="submit" disabled={isLoading} className="border border-primary/20">
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
```

### 5. TrackList Component (src/components/TrackList.jsx)
```jsx
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const TrackList = () => {
  const { toast } = useToast();
  const iframeRefs = useRef([]);

  const tracks = [
    {
      title: "Vera Cruz",
      url: "https://soundcloud.com/everardo-olivares/vera-cruz-m4a",
    },
    {
      title: "Broken Club",
      url: "https://soundcloud.com/eyov5/broken-club-draft",
    },
    {
      title: "Less is More",
      url: "https://soundcloud.com/eyov5/less-cap-draft",
    },
    {
      title: "A Whole Lotta Gremlin",
      url: "https://soundcloud.com/eyov5/a-whole-lotta-gremlin-draft",
    }
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      iframeRefs.current.forEach((iframe, index) => {
        if (iframe) {
          try {
            const widget = window.SC.Widget(iframe);
            widget.bind(window.SC.Widget.Events.ERROR, () => {
              toast({
                title: "Error",
                description: `Failed to load track: ${tracks[index].title}`,
                variant: "destructive",
              });
            });
          } catch (error) {
            console.error('Error initializing SoundCloud widget:', error);
          }
        }
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="grid gap-4 p-4">
      {tracks.map((track, index) => (
        <Card key={index} className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-lg font-bold text-black text-shadow-glow">{track.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="w-full">
              <iframe
                ref={el => iframeRefs.current[index] = el}
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                title={track.title}
              ></iframe>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrackList;
```

### 6. SocialLinks Component (src/components/SocialLinks.jsx)
```jsx
import React from 'react';
import '../styles/social.css';

const SocialLinks = () => {
  return (
    <footer className="w-full py-6 mt-8 bg-[#002a38]">
      <div className="social-links">
        <ul>
          <li><a href="https://github.com/eyov7">Github</a></li>
          <li><a href="https://www.linkedin.com/in/everolivares/">LinkedIn</a></li>
          <li><a href="https://soundcloud.com/eyov5">SoundCloud</a></li>
          <li>
            <p>👋</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default SocialLinks;
```

### 7. Styles (src/styles/social.css)
```css
.social-links {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.social-links ul {
  display: inline-grid;
  grid-auto-flow: row;
  grid-gap: 24px;
  justify-items: center;
  margin: auto;
}

@media (min-width: 500px) {
  .social-links ul {
    grid-auto-flow: column;
  }
}

.social-links a {
  color: white;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
}

.social-links a:hover {
  box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
}

.social-links li:last-child {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.social-links li:hover ~ li p {
  animation: wave-animation 0.3s infinite;
}

@keyframes wave-animation {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-15deg); }
}
```

### 8. AI Context (src/data/ai-context.md)
```markdown
# Assistant Context for Ever Olivares' Portfolio

## Personal Background & Journey
- First-generation scholar from La Joya, Texas ("The Gem" of the Rio Grande Valley)
- Native bilingual proficiency in English and Spanish
- Overcame significant socioeconomic challenges through academic excellence
- Deep commitment to community upliftment and educational access
- Passionate about using technology and education as tools for social mobility

## Music Production Career
IMPORTANT: Ever is NOT an audio engineer. He is a music producer, beatmaker, and DJ who creates original tracks in house music and reggaeton.

TRACKS AVAILABLE ON SOUNDCLOUD:
1. "Vera Cruz" - House music track
   - Listen at: soundcloud.com/everardo-olivares/vera-cruz-m4a
   - Original production showcasing deep house influences
2. "Broken Club" - Electronic/House fusion
   - Listen at: soundcloud.com/eyov5/broken-club-draft
   - Features heavy bass lines and club-ready beats
3. "Less is More" - Minimal house track
   - Listen at: soundcloud.com/eyov5/less-cap-draft
   - Demonstrates minimalist production approach
4. "A Whole Lotta Gremlin" - Experimental house
   - Listen at: soundcloud.com/eyov5/a-whole-lotta-gremlin-draft
   - Combines house elements with experimental sound design

[... Rest of the context content ...]
```

## Step 4: Build and Run

1. Create a `.env` file based on `.env.example`
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Additional Notes

1. Make sure to have all the UI components from shadcn/ui installed
2. Set up your Gemini API key in the `.env` file
3. Add your personal context in the `.env` file
4. Place your resume PDF in the public folder
5. Update the social links in SocialLinks.jsx with your actual profiles

This rebuild guide contains the core components and structure of your portfolio application. The shadcn/ui components and other utility files can be added as needed from the shadcn/ui documentation.
