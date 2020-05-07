import React from "react";

import ".App.css";
// import About from "./components/About";
// import Projects from "./components/Projects";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { content } from "../../content";

const App = () => {
  // const { title, aboutMe } = content;

  return (
    <div className="app">
      <nav className="navbar">
        <div className="image-wrapper">
          <img src="" alt=""/>
        </div>
        <div className="navbar-wrapper">
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Skills</li>
          </ul>
        </div>
      </nav>
      
      <main>
        <Header text={title} />
        <AboutMe content={aboutMe} />
        <Projects />
        <section className="education">
          <h1 className="title">Education</h1>
        </section>
        <section className="skills">
          <h1 className="title">Skills</h1>
        </section>
        <section className="contact">
          <h1 className="title">Contact</h1>
        </section>
      </main>
    </div>
  );
};

export default App;
