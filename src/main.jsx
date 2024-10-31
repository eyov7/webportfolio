import React from 'react';
import { createRoot } from 'react-dom/client';
import TrackList from './components/TrackList';
import AnimatedFooter from './components/AnimatedFooter';
import '../style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TrackList />
    <AnimatedFooter />
  </React.StrictMode>
);