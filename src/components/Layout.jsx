import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 4ever20. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;