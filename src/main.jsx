import React from 'react';
import { createRoot } from 'react-dom/client';
import TrackList from './components/TrackList';
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