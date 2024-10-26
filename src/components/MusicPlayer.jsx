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
    <div className="space-y-6">
      {tracks.map((track, index) => (
        <div key={index} className="bg-white/50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">{track.title}</h3>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            className="rounded-md"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default MusicPlayer;