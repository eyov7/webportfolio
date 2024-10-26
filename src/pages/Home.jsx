import React from 'react';
import MusicPlayer from '../components/MusicPlayer';

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <p className="text-gray-600">
          I'm jo, currently a master's student in data science. This site is a work in progress 
          as I'm still figuring out what I want to document and share on here. Thanks for dropping by!
        </p>
      </section>
      
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Music</h2>
        <MusicPlayer />
      </section>
    </div>
  );
};

export default Home;