import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="wrapper">
      <div className="box-alt">
        <div className="test">
          <h3>navigation</h3>
        </div>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/blog">blog</Link></li>
          </ul>
        </nav>
      </div>
      
      <div className="box-alt">
        <div className="test">
          <h3>about</h3>
        </div>
        <div className="blog-box">
          <br />
          <b>welcome</b>
          <br />
          i'm jo, currently a master's student in data science. this site is a work in progress as i'm still figuring out what i want to document and share on here. thanks for dropping by!
          <br />
          <br />
        </div>
        <div className="content-box">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/eyov5/a-whole-lotta-gremlin-draft&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Index;