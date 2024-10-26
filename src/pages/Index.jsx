import React from 'react';
import Header from '../components/Header';
import MusicPlayer from '../components/MusicPlayer';
import BlogPosts from '../components/BlogPosts';
import Projects from '../components/Projects';
import ProjectNotes from '../components/ProjectNotes';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-6">Latest Music</h2>
          <MusicPlayer />
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-6">Project Notes</h2>
          <ProjectNotes />
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-6">Blog Posts</h2>
          <BlogPosts />
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <Projects />
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 4ever20. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;