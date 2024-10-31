import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrackList = () => {
  const tracks = [
    {
      title: "Vera Cruz",
      url: "https://soundcloud.com/everardo-olivares/vera-cruz-m4a",
    },
    {
      title: "Broken Club",
      url: "https://soundcloud.com/eyov5/broken-club-draft",
    },
    {
      title: "Less is More",
      url: "https://soundcloud.com/eyov5/less-cap-draft",
    },
    {
      title: "A Whole Lotta Gremlin",
      url: "https://soundcloud.com/eyov5/a-whole-lotta-gremlin-draft",
    }
  ];

  return (
    <div className="grid gap-4 p-4">
      {tracks.map((track, index) => (
        <Card key={index} className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-lg font-semibold text-gray-800 text-shadow-glow">{track.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
              title={track.title}
            ></iframe>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrackList;