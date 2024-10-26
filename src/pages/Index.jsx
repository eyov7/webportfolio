import React from 'react';
import Header from '../components/Header';
import MusicPlayer from '../components/MusicPlayer';
import BlogPosts from '../components/BlogPosts';
import Projects from '../components/Projects';
import ProjectNotes from '../components/ProjectNotes';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-mono">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Latest Music</h2>
          <MusicPlayer />
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Project Notes</h2>
          <ProjectNotes />
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
          <BlogPosts />
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <Projects />
        </section>
      </main>
    </div>
  );
};

export default Index;