import React from "react";

export const AboutMe = ({ content }) => (
  <section className="about">
    <h1>{content.title}</h1>
    <p>{content.text}</p>
  </section>
);
