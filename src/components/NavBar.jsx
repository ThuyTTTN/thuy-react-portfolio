import styled from "styled-components";
import user from "../assets/user.png";
import project from "../assets/project.png";
import mail from "../assets/mail.png";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  width: 4rem;
`;

const Logo = styled.div`
  background-color: #c48f7f;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
`;

const LogoText = styled.p`
  background-color: #c48f7f;
  color: #3d3d3d;
  font-weight: 700;
  font-size: 30px;
  justify-content: center;
  align-self: center;
`;

const Space = styled.div`
  margin-top: 2rem;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
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

  ${IconWrapper}:hover & {
    opacity: 1;
    left: calc(4rem + 50%);
  }
`;

const Icon = styled.img`
  width: 25px;
`;

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        {/* link logo to home page */}
        <Logo>
          <LogoText>TN</LogoText>
        </Logo>
        <Space />
        <IconWrapper>
          <Icon src={user} />
          <IconText>About</IconText>
        </IconWrapper>
        <Space />
        <IconWrapper>
          <Icon src={project} />
          <IconText>Portfolio</IconText>
        </IconWrapper>
        <Space />
        <IconWrapper>
          <Icon src={mail} />
          <IconText>Contact</IconText>
        </IconWrapper>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
