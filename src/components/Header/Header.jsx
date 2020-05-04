import React from "react";

import { HeaderWrapper } from './HeaderElements'

export const Header = ({ text }) => (
  <React.Fragment>
    <HeaderWrapper>
      <h1>{text}</h1>
    </HeaderWrapper>
    <div className="main-title">
      
    </div>
  </React.Fragment>
);
