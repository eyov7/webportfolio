import React from 'react';
import MusicPlayer from '../components/MusicPlayer';

const Index = () => {
  return (
    <div className="wrapper">
      <div className="box-alt">
        <div className="test">
          <h3>navigation</h3>
        </div>
        <nav>
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#portfolio">projects</a></li>
            <li><a href="#contact">blog</a></li>
          </ul>
        </nav>
      </div>
      <div className="box-alt">
        <div className="test">
          <h3>about</h3>
        </div>
        <div className="blog-box">
          <b>welcome</b>
          <br />
          i'm jo, currently a master's student in data science. this site is a work in progress as i'm still figuring out what i want to document and share on here. thanks for dropping by!
        </div>
        <div className="content-box">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default Index;