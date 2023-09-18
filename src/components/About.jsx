import styled from "styled-components";
import watercolorBanner from "../assets/watercolor-splash-banner.png";

const Container = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f4ddd5;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: #f4ddd5;
  line-height: 1.5;
  width: 70%;
`;

const About = () => {
  return (
    <Container>
      <Title>About Me </Title>
      <img src={watercolorBanner} alt="Header Img" width="300" height="auto" />
      <Text>
        I'm a Full Stack Web Developer and a mother of 2. I have experience in
        React, React Native, JavaScript, CSS, HTML, Bootstrap, MySQL, Node.js,
        Express.js, MongoDB, Apollo GraphQL, and GIT/Github. I love learning new
        programming languages and building applications. In addition to software
        development, I have a broad interest in healthcare. When I'm not coding,
        I enjoy making memories with my family, going to the beach, and
        traveling. I look forward to working with you in the near future.
      </Text>
    </Container>
  );
};

export default About;
