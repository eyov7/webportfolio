import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            4ever20
          </Link>
          <nav>
            <ul className="flex items-center space-x-8">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link to="/music" className="text-gray-600 hover:text-gray-900 transition-colors">Music</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;