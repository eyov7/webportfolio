import React from 'react';

const AnimatedHeader = () => {
  return (
    <a className="group" id="page-wrap">
      <div id="inner-wrap">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" width="1440" height="321.75" viewBox="0 0 960 214.5" preserveAspectRatio="xMinYMid meet">
          <defs>
            <linearGradient id="headerGradient">
              <stop offset="0%" stopColor="#e7c4d8"/>
              <stop offset="25%" stopColor="#cdcbd4"/>
              <stop offset="50%" stopColor="#c0e0ed"/>
              <stop offset="75%" stopColor="#4f7396"/>
            </linearGradient>
          </defs>
          <path fill="url(#headerGradient)" d="M2662.6 1S2532 41.2 2435 40.2c-19.6-.2-37.3-1.3-53.5-2.8 0 0-421.3-59.4-541-28.6-119.8 30.6-206.2 75.7-391 73.3-198.8-2-225.3-15-370.2-50-145-35-218 37-373.3 36-19.6 0-37.5-1-53.7-3 0 0-282.7-36-373.4-38C139 26 75 46-1 46v106c17-1.4 20-2.3 37.6-1.2 130.6 8.4 210 56.3 287 62.4 77 6 262-25 329.3-23.6 67 1.4 107 22.6 193 23.4 155 1.5 249-71 380-62.5 130 8.5 209 56.3 287 62.5 77 6 126-18 188-18 61.4 0 247-38 307.4-46 159.3-20 281.2 29 348.4 30 67 2 132.2 6 217.4 7 39.3 0 87-11 87-11V1z"/>
        </svg>
        <svg className="text" xmlns="http://www.w3.org/2000/svg" width="1440" height="321.75" viewBox="0 0 1440 321.8" preserveAspectRatio="xMidYMid meet">
          <path fill="#4f7396" d="M620 160 L620 220 L780 220 L780 160 L620 160 M640 180 L760 180 L760 200 L640 200 L640 180" />
          <text x="700" y="170" textAnchor="middle" fill="#4f7396" fontSize="72" fontFamily="Verdana, Arial, sans-serif" className="text-shadow-glow">
            4ever20
          </text>
        </svg>
      </div>
    </a>
  );
};

export default AnimatedHeader;