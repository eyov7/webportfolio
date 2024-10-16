import React from 'react';

const BlogPosts = () => {
  const posts = [
    { title: 'My Latest ML Project', excerpt: 'A brief overview of my recent machine learning project...' },
    { title: 'Thoughts on AI', excerpt: 'Exploring the implications of artificial intelligence...' },
  ];

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p>{post.excerpt}</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;