import styled from "styled-components";
import { FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const NavItem = styled.div`
  margin: 0 0.5em 0 0.5em;
`;

const SocialIconsNav = () => {
  return (
    <SocialWrapper>
      <NavItem>
        <a
          href="https://www.linkedin.com/in/mike-coon-a1001014a"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </NavItem>

      <NavItem>
        <a
          href="https://twitter.com/MikeCoon718"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </NavItem>
      <NavItem>
        <a href="https://medium.com/@mac718" target="_blank" rel="noreferrer">
          <FaMedium />
        </a>
      </NavItem>
    </SocialWrapper>
  );
};

export default SocialIconsNav;
