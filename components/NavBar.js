import { useState, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import SocialIconsNav from "./UI/SocialIconsNav";

const transitionBg = keyframes`
  from {
    color: white;
  }
  to {
    color: black;
    background: white;
    opacity: 0.9;
  }
`;

const transitionBackBg = keyframes`
  from {
    color: black;
    background: white;
    opacity: 0.9;
  }
  to {
    color: white;
  }
  
`;

const Nav = styled.nav`
  top: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.5em;
  color: white;
  position: fixed;
  padding: 1em;
  z-index: 1;
  animation: ${(props) =>
    props.backgroundTransition
      ? css`
          ${transitionBg} 1s forwards
        `
      : css`
          ${transitionBackBg} 0.5s forwards
        `};
`;

const SectionsWrapper = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-between;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 33%;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  width: 33%;
`;

const NavItem = styled.div`
  margin: 0 0.5em 0 0.5em;
`;
//comment
const NavBar = () => {
  const [backgroundTransition, setBackgroundTransition] = useState(false);
  let nav = useRef(null);

  const handleScroll = () => {
    if (window.pageYOffset > nav.current.getBoundingClientRect().top) {
      setBackgroundTransition(true);
    } else {
      setBackgroundTransition(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav id="nav" ref={nav} backgroundTransition={backgroundTransition}>
      <TopWrapper>
        <a href="#top">Top</a>
        <MdArrowUpward />
      </TopWrapper>
      <SectionsWrapper backgroundTransition={backgroundTransition}>
        <NavItem>
          <a href="#projects">Projects</a>
        </NavItem>
        <NavItem>
          <a href="#repos">Repos</a>
        </NavItem>
        <NavItem>
          <a href="#about">About</a>
        </NavItem>
        <NavItem>
          <a href="#contact">Contact</a>
        </NavItem>
      </SectionsWrapper>
      <SocialIconsNav />
    </Nav>
  );
};

export default NavBar;
