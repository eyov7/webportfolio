import React from 'react';

const MusicPlayer = () => {
  const tracks = [
    {
      title: "A Whole Lotta Gremlin (Draft)",
      url: "https://soundcloud.com/eyov5/a-whole-lotta-gremlin-draft"
    },
    {
      title: "Less Cap (Draft)",
      url: "https://soundcloud.com/eyov5/less-cap-draft"
    },
    {
      title: "Broken Club (Draft)",
      url: "https://soundcloud.com/eyov5/broken-club-draft"
    }
  ];

  return (
    <div className="p-4">
      {tracks.map((track, index) => (
        <div key={index} className="mb-4">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default MusicPlayer;