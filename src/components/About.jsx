import styled from "styled-components";
import thuy from "../assets/thuy.jpg";

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f4ddd5;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  margin-left: 2rem;
  font-size: 1.2rem;
  color: #f4ddd5;
  line-height: 1.5;
  width: 50%;

  @media (min-width: 300px) {
    font-size: 0.875rem;
    margin-left: 0;
    width: 100%;
    margin-top: 1rem;
  }

  @media (min-width: 425px) {
    font-size: 0.875rem;
    margin-left: 0;
    width: 100%;
    margin-top: 1rem;
  }

  @media (min-width: 664px) {
    font-size: 1rem;
    margin-left: 2rem;
  }

  @media (min-width: 890px) {
    font-size: 1.2rem;
    margin-left: 2rem;
  }
`;

const StyledImage = styled.img`
  width: 250px;
  height: auto;

  @media (min-width: 320px) {
    width: 200px;
    height: auto;
  }

  @media (min-width: 425px) {
    width: 200px;
    height: auto;
  }

  @media (min-width: 664px) {
    width: 200px;
    height: auto;
  }

  @media (min-width: 890px) {
    width: 250px;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  @media (min-width: 325px) {
    flex-direction: column;
  }
  @media (min-width: 664px) {
    flex-direction: row;
  }

  @media (min-width: 890px) {
    flex-direction: row;
  }
`;

const About = () => {
  return (
    <Container>
      <Title>About Me </Title>
      <ContentContainer>
        <div style={{ width: "fit-content" }}>
          <StyledImage src={thuy} alt="Header Img" />
        </div>
        <Text>
          I'm a Full Stack Web Developer and a mother of 2. I have experience in
          React, React Native, JavaScript, CSS, HTML, Bootstrap, MySQL, Node.js,
          Express.js, MongoDB, Apollo GraphQL, and GIT/Github. I love learning
          new programming languages and building applications. In addition to
          software development, I have a broad interest in healthcare. When I'm
          not coding, I enjoy making memories with my family, going to the
          beach, and traveling. I look forward to working with you in the near
          future.
        </Text>
      </ContentContainer>
    </Container>
  );
};

export default About;
