import React from 'react';
import { createRoot } from 'react-dom/client';
import TrackList from './components/TrackList';

const trackListContainer = document.getElementById('track-list');
if (trackListContainer) {
  const root = createRoot(trackListContainer);
  root.render(<TrackList />);
}