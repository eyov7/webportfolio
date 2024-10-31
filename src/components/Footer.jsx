import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#002a38]/80 backdrop-blur-sm py-8 mt-auto">
      <div className="container mx-auto">
        <ul className="inline-grid grid-flow-row gap-6 justify-items-center mx-auto w-full">
          <li>
            <a 
              href="https://github.com/eyov7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white no-underline hover:shadow-[inset_0_-1.2em_0_hsla(0,0%,100%,0.4)] shadow-[inset_0_-1px_0_hsla(0,0%,100%,0.4)] transition-shadow duration-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/everolivares/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white no-underline hover:shadow-[inset_0_-1.2em_0_hsla(0,0%,100%,0.4)] shadow-[inset_0_-1px_0_hsla(0,0%,100%,0.4)] transition-shadow duration-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://soundcloud.com/eyov5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white no-underline hover:shadow-[inset_0_-1.2em_0_hsla(0,0%,100%,0.4)] shadow-[inset_0_-1px_0_hsla(0,0%,100%,0.4)] transition-shadow duration-300"
            >
              SoundCloud
            </a>
          </li>
          <li className="col-start-1 row-start-1">
            <p className="text-2xl m-0">👋</p>
          </li>
        </ul>
        <p className="text-center text-white/80 mt-4">&copy; 2024 4ever20 | Created with 💜</p>
      </div>
    </footer>
  );
};

export default Footer;