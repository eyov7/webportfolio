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
      title: "Less Cap",
      url: "https://soundcloud.com/eyov5/less-cap-draft",
    },
    {
      title: "A Whole Lotta Gremlin",
      url: "https://soundcloud.com/eyov5/a-whole-lotta-gremlin-draft",
    }
  ];

  return (
    <div className="grid gap-4">
      {tracks.map((track, index) => (
        <Card key={index} className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-darkblue">{track.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
            ></iframe>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrackList;