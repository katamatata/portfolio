import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { content } from "../../content";
import About from "../About";
import Projects from "../Projects/Projects";

import { Wrapper, NavBarWrapper, ImageWrapper, Avatar, Menu, MenuItem, Link } from "./AppElements";

export const App = () => {

  const renderAbout = () => (
    <About content={content.about} />
  )

  return (
    <Router>
      <Wrapper>
        <NavBarWrapper>
          <ImageWrapper>
            <Avatar src="images/avatar.png" alt="" />
          </ImageWrapper>
          <Menu>
            <MenuItem>
              <Link to="/about">{content.about.title}</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/projects">{content.projects.title}</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/education">{content.education.title}</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/skills">{content.skills.title}</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/interests">{content.interests.title}</Link>
            </MenuItem>
          </Menu>
        </NavBarWrapper>

        <Switch>
          <Route exact path="/">
            {renderAbout()}
          </Route>
          <Route path="/about">
            {renderAbout()}
          </Route>
          <Route path="/projects">
            <Projects text="dgsdfgsdgs"/>
          </Route>
          <Route path="/education">
            {/* <Education /> */}
          </Route>
          <Route path="/skills">
            {/* <Skills /> */}
          </Route>
          <Route path="/interests">
            {/* <Interests /> */}
          </Route>
          
        </Switch>
      </Wrapper>
    </Router> 
  );
};
