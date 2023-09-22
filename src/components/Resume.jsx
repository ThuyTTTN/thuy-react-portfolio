import styled from "styled-components";
import Footer from "./Footer";

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
  font-size: 1.5rem;
  background-color: #eae9e5;
  font-weight: 700;
  color: #3d3d3d;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  background-color: #eae9e5;
  margin-top: 1rem;
  padding: 1rem;
  width: 80%;
  height: 75%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.5);
`;

const StyledButton = styled.button`
  width: 17rem;
  height: 3rem;
  font-size: 1.3rem;
  color: 3d3d3d;
  font-weight: 500;
  background-color: #c48f7f;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonWrapper = styled.a`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

const StyledButtonCard = styled.div`
  background-color: #f4ddd5;
  color: #3d3d3d;
  margin: 0.25rem;
  padding: 0.5rem 0.75rem;
  width: auto;
  height: 2rem;
  font-size: 1rem;
  border-radius: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 5px 2px rgba(61, 61, 61, 0.3);
  &:hover {
    background-color: #c48f7f;
  }
`;

const Resume = () => {
  const frontEndList = [
    "React",
    "React Native",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "jQuery",
  ];
  const backEndList = [
    "APIs",
    "REST",
    "Node",
    "Express",
    "NoSQL",
    "MySQL/Sequelize",
    "MongoDB/Mongoose",
  ];

  return (
    <Container>
      <Title>Resume </Title>
      <ButtonWrapper
        href="https://1drv.ms/w/s!Aka643mjyMAQpQaZPaW1evtd59rc?e=epJybn"
        target="_blank"
        rel="noopener noreferrer"
        variant="light"
      >
        <StyledButton>Click for my Resume</StyledButton>
      </ButtonWrapper>
      <Wrapper>
        <Text>Frontend</Text>
        <div
          style={{
            backgroundColor: "#eae9e5",
            display: "flex",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {frontEndList.map((frontend, index) => {
            return <StyledButtonCard key={index}>{frontend}</StyledButtonCard>;
          })}
        </div>
        <Text>Backend</Text>
        <div
          style={{
            backgroundColor: "#eae9e5",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {backEndList.map((backend, index) => {
            return <StyledButtonCard key={index}>{backend}</StyledButtonCard>;
          })}
        </div>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Resume;
