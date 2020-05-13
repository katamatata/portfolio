import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Wrapper = styled.div`
  font-family: Muli, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  color: #868e96;
  line-height: 1.5; 
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
  font-weight: 900;
  letter-spacing: 0.8px;
  padding: 8px;
  cursor: pointer; 
`;

export const Link = styled(RouterLink)`
  color: rgba(255,255,255,.5);
  &:hover {
    color: #fff;
  }
`;