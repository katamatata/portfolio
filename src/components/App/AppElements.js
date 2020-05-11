import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-left: 272px;
`;

export const NavBarWrapper = styled.nav`
  height: 100vh;
  background-color: green;
  width: 240px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  margin: auto auto 0;
`;

export const Avatar = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 8px;
`;

export const Menu = styled.ul`
  margin: 0 auto auto;
`;

export const MenuItem = styled.li`
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  color: rgba(255,255,255,.5);
  padding: 8px;
`;
