import React from 'react';

const MusicPlayer = () => {
  // Replace this URL with your actual SoundCloud playlist or track URL
  const soundcloudUrl = "https://soundcloud.com/your-username/sets/your-playlist";

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-4">My SoundCloud Music</h3>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
      ></iframe>
    </div>
  );
};

export default MusicPlayer;