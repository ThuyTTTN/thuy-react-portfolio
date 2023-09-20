import styled from "styled-components";
import user from "../assets/user.png";
import project from "../assets/project.png";
// import resume from "../assets/resume.png";
import mail from "../assets/mail.png";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
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

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <Logo>
          <LogoText>TN</LogoText>
        </Logo>
        <Space />
        <img src={user} width={25} style={{ marginLeft: "1.25rem" }} />
        <Space />
        <img src={project} width={25} style={{ marginLeft: "1.25rem" }} />
        <Space />
        <img src={mail} width={25} style={{ marginLeft: "1.25rem" }} />
      </NavBarContainer>
    </>
  );
};

export default NavBar;
