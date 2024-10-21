import React from 'react';

const MusicPlayer = () => {
  const soundcloudUrl = "https://soundcloud.com/eyov5/a-whole-lotta-gremlin-draft?si=8fca2e8c67b340a3bb9f914657601761&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Featured Track: A Whole Lotta Gremlin (Draft)</h3>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundcloudUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
      ></iframe>
    </div>
  );
};

export default MusicPlayer;