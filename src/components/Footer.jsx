import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#002a38]/80 backdrop-blur-sm py-8 mt-auto">
      <div className="container mx-auto flex justify-center items-center gap-6">
        <a 
          href="https://github.com/eyov7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white no-underline hover:shadow-[inset_0_-1.2em_0_hsla(0,0%,100%,0.4)] shadow-[inset_0_-1px_0_hsla(0,0%,100%,0.4)] transition-shadow duration-300"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/everolivares/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white no-underline hover:shadow-[inset_0_-1.2em_0_hsla(0,0%,100%,0.4)] shadow-[inset_0_-1px_0_hsla(0,0%,100%,0.4)] transition-shadow duration-300"
        >
          LinkedIn
        </a>
        <a 
          href="https://soundcloud.com/eyov5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white no-underline hover:shadow-[inset_0_-1.2em_0_hsla(0,0%,100%,0.4)] shadow-[inset_0_-1px_0_hsla(0,0%,100%,0.4)] transition-shadow duration-300"
        >
          SoundCloud
        </a>
      </div>
    </footer>
  );
};

export default Footer;