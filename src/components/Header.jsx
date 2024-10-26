import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
            4ever20
          </Link>
          <nav>
            <ul className="flex items-center space-x-8">
              <li><Link to="/" className="text-indigo-600 hover:text-indigo-500 transition-colors">Home</Link></li>
              <li><Link to="/music" className="text-indigo-600 hover:text-indigo-500 transition-colors">Music</Link></li>
              <li><Link to="/blog" className="text-indigo-600 hover:text-indigo-500 transition-colors">Blog</Link></li>
              <li><Link to="/projects" className="text-indigo-600 hover:text-indigo-500 transition-colors">Projects</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;