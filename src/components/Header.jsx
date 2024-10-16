import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">4ever20</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Music</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">Projects</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;