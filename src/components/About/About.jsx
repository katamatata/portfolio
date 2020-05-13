import React from "react";

import { H1 } from "../../common";

import { Surname } from "./AboutElements";

export const About = ({ content }) => {
  return (
    <div>
      <H1>{content.name} <Surname>Voronina</Surname></H1>
    </div>
)};
