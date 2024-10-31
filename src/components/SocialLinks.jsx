import React from 'react';

const SocialLinks = () => {
  return (
    <div className="fixed bottom-4 left-4 w-96 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border rounded-lg shadow-lg p-4">
      <h3 className="font-bold mb-4 text-black text-shadow-glow">Connect with me!</h3>
      <ul className="grid grid-flow-col gap-6 justify-center items-center relative">
        <li><a href="https://github.com/eyov7" className="text-black hover:text-primary text-shadow-glow">Github</a></li>
        <li><a href="https://www.linkedin.com/in/everolivares/" className="text-black hover:text-primary text-shadow-glow">LinkedIn</a></li>
        <li><a href="https://soundcloud.com/eyov5" className="text-black hover:text-primary text-shadow-glow">SoundCloud</a></li>
        <li className="absolute left-0 top-0">
          <p className="wave-emoji">👋</p>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;