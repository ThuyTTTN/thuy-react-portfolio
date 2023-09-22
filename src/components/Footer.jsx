import styled from "styled-components";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 30vh;
  justify-content: space-between;
  align-items: flex-end;
  width: 50rem;
  margin-bottom: 2rem;

  @media (min-width: 320px) {
    width: 15rem;
  }

  @media (min-width: 425px) {
    width: 18rem;
  }

  @media (min-width: 664px) {
    width: 30rem;
  }

  @media (min-width: 960px) {
    width: 40rem;
  }
  @media (min-width: 1200px) {
    width: 50rem;
  }
`;

const Text = styled.p`
  color: #c48f7f;
  font-size: 1rem;
  font-weight: 500;
`;
const TextWrapper = styled.div``;

const StyledLink = styled.a`
  margin: 0 0.75rem;
`;

const StyledImage = styled.img`
  &:hover {
    transform: scale(1.1);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TextWrapper>
        <Text>&copy; 2022 Thuy Nguyen</Text>
      </TextWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1rem",
        }}
      >
        <StyledLink href="https://github.com/ThuyTTTN" target="_blank">
          <StyledImage src={github} />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/thuy-nguyen-a2333031"
          target="_blank"
        >
          <StyledImage src={linkedin} />
        </StyledLink>
        <StyledLink href="https://www.instagram.com/thuytttn" target="_blank">
          <StyledImage src={instagram} />
        </StyledLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;
