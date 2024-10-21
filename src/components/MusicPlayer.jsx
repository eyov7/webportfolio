import React from 'react';

const MusicPlayer = () => {
  const tracks = [
    {
      title: "A Whole Lotta Gremlin (Draft)",
      url: "https://soundcloud.com/eyov5/a-whole-lotta-gremlin-draft?si=8fca2e8c67b340a3bb9f914657601761&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
      title: "Less Cap (Draft)",
      url: "https://soundcloud.com/eyov5/less-cap-draft?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=1bb3a66e1db541b7b4f8a010397a484c"
    },
    {
      title: "Broken Club (Draft)",
      url: "https://soundcloud.com/eyov5/broken-club-draft?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=c600e5c34a9a49e697991a988476b4a0"
    }
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-2xl font-bold mb-4">Featured Tracks</h3>
      <div className="space-y-4">
        {tracks.map((track, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <h4 className="text-xl font-semibold mb-2">{track.title}</h4>
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
    </div>
  );
};

export default MusicPlayer;