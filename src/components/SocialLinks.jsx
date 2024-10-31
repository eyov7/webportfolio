import React from 'react';
import '../styles/social.css';

const SocialLinks = () => {
  return (
    <footer className="w-full py-6 mt-8 bg-[#002a38]">
      <div className="social-links">
        <ul>
          <li><a href="https://github.com/eyov7">Github</a></li>
          <li><a href="https://www.linkedin.com/in/everolivares/">LinkedIn</a></li>
          <li><a href="https://soundcloud.com/eyov5">SoundCloud</a></li>
          <li>
            <p>👋</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default SocialLinks;