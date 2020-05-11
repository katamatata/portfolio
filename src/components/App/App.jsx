import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { content } from "../../content";

import { Wrapper, NavBarWrapper, ImageWrapper, Avatar, Menu, MenuItem } from "./AppElements";

export const App = () => {

  return (

    <Router>
      <Wrapper>
        <NavBarWrapper>
          <ImageWrapper>
            <Avatar src="images/avatar.png" alt="" />
          </ImageWrapper>
          <Menu>
            <MenuItem>
              <Link to="/">{content.about.title}</Link>
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
      
        <main>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe magni blanditiis officia nulla dolores nesciunt et praesentium officiis perferendis nisi suscipit fugiat quo id aut ab eum quam, vel adipisci?
        </main>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/interests">
            <Interests />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Wrapper>
    </Router> 
  );
};
