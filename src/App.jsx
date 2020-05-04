import React from "react";

import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import { content } from "./content";

const App = () => {
  const { title, aboutMe } = content;

  return (
    <div>
      <Header text={title} />
      <AboutMe content={aboutMe} />
      <Projects />
      <Experience />
      <div className="container">
        <section className="education">
          <h1 className="title">Education</h1>
        </section>
        <section className="skills">
          <h1 className="title">Skills</h1>
        </section>
        <section className="portfolio">
          <h1 className="title">Portfolio</h1>
        </section>
        <section className="contact">
          <h1 className="title">Contact</h1>
        </section>
      </div>
    </div>
  );
};

export default App;
