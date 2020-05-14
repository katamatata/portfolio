import React from "react";

import { H1, H4 } from "../../common";

import { SpanColor, Description } from "./AboutElements";
import Social from "./components/Social";

export const About = ({ content }) => (
    <div>
      <H1>{content.name} <SpanColor>{content.surname}</SpanColor></H1>
      <H4>{content.address} · {content.phoneNumber} · <SpanColor>{content.email}</SpanColor></H4>
      <Description>{content.description}</Description>
      <Social />
    </div>
);