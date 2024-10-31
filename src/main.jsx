import React from 'react';
import { createRoot } from 'react-dom/client';
import TrackList from './components/TrackList';
import Footer from './components/Footer';
import './styles/base.css';
import './styles/glassmorphism.css';
import './styles/footer.css';

const trackListContainer = document.getElementById('track-list');
if (trackListContainer) {
  const root = createRoot(trackListContainer);
  root.render(
    <React.StrictMode>
      <TrackList />
    </React.StrictMode>
  );
}

const footerContainer = document.getElementById('footer');
if (footerContainer) {
  const footerRoot = createRoot(footerContainer);
  footerRoot.render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>
  );
}
