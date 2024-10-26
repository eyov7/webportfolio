import React from 'react';
import MusicPlayer from '../components/MusicPlayer';

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          I'm jo, currently a master's student in data science. This site is a work in progress 
          as I'm still figuring out what I want to document and share on here. Thanks for dropping by!
        </p>
      </section>
      
      <section className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Music</h2>
        <MusicPlayer />
      </section>
    </div>
  );
};

export default Home;