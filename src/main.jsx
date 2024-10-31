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