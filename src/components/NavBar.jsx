import styled from "styled-components";
import user from "../assets/user.png";
import project2 from "../assets/project-management.png";
import mail from "../assets/mail.png";
import cv from "../assets/cv.png";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 6rem;
  width: 4rem;

  @media (min-width: 320px) {
    margin-right: 4rem;
  }

  @media (min-width: 425px) {
    margin-right: 4rem;
  }

  @media (min-width: 664px) {
    margin-right: 5rem;
  }

  @media (min-width: 960px) {
    margin-right: 6rem;
  }
`;

const LogoLink = styled(Link)`
  background-color: #c48f7f;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const LogoText = styled.p`
  background-color: #c48f7f;
  color: #3d3d3d;
  font-weight: 700;
  font-size: 30px;
  justify-content: center;
  align-self: center;
  cursor: pointer;
`;

const Space = styled.div`
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  position: relative;
  align-items: center;
  margin-left: 1.25rem;
`;

const IconText = styled.span`
  position: absolute;
  font-weight: 700;
  top: 50%;
  left: -100%;
  transform: translate(-50%, -50%);
  background-color: #c48f7f;
  color: #3d3d3d;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  opacity: 0;
  transition: all 0.4s ease-out;

  @media (max-width: 700px) {
    display: none;
  }

  ${StyledLink}:hover & {
    opacity: 1;
    left: calc(4rem + 50%);
  }
`;

const Icon = styled.img`
  width: 25px;
}
`;

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <LogoLink to="/">
          <LogoText>TN</LogoText>
        </LogoLink>
        <Space />
        <StyledLink to="/about">
          <Icon src={user} />
          <IconText>About</IconText>
        </StyledLink>
        <Space />
        <StyledLink to="/projects">
          <Icon src={project2} />
          <IconText>Projects</IconText>
        </StyledLink>
        <Space />
        <StyledLink to="/resume">
          <Icon src={cv} />
          <IconText>Resume</IconText>
        </StyledLink>
        <Space />
        <StyledLink to="/contact">
          <Icon src={mail} />
          <IconText>Contact</IconText>
        </StyledLink>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
