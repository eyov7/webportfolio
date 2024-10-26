import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">4ever20</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
              <li><Link to="/music" className="hover:text-gray-300 transition-colors">Music</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
              <li><Link to="/projects" className="hover:text-gray-300 transition-colors">Projects</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;