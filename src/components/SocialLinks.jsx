import React from 'react';

const SocialLinks = () => {
  return (
    <footer className="w-full py-6 mt-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container flex flex-col items-center">
        <h3 className="font-bold mb-4 text-black text-shadow-glow">Connect with me!</h3>
        <ul className="inline-grid grid-flow-col gap-6 items-center relative">
          <li><a href="https://github.com/eyov7" className="text-black hover:text-primary text-shadow-glow transition-all duration-300 hover:shadow-[inset_0_-1.2em_0_hsla(0,0%,100%,0.4)]">Github</a></li>
          <li><a href="https://www.linkedin.com/in/everolivares/" className="text-black hover:text-primary text-shadow-glow transition-all duration-300 hover:shadow-[inset_0_-1.2em_0_hsla(0,0%,100%,0.4)]">LinkedIn</a></li>
          <li><a href="https://soundcloud.com/eyov5" className="text-black hover:text-primary text-shadow-glow transition-all duration-300 hover:shadow-[inset_0_-1.2em_0_hsla(0,0%,100%,0.4)]">SoundCloud</a></li>
          <li className="absolute left-0 top-0">
            <p className="wave-emoji">👋</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default SocialLinks;