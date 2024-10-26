import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-8">
        {children}
      </main>
      <footer className="bg-white/90 backdrop-blur-sm shadow-sm text-indigo-600 py-6">
        <div className="container text-center">
          <p className="text-sm">&copy; 2024 4ever20. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;