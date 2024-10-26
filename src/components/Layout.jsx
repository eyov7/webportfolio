import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container text-center">
          <p className="text-sm">&copy; 2024 4ever20. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;