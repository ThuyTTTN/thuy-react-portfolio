import styled from "styled-components";

const CardContainer = styled.div`
  margin: 1rem;
  width: 13rem;
  height: 16rem;
  border-radius: 15px;
  background-color: #eae9e5;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.5);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eae9e5;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled.div`
  background-color: #c48f7f;
  color: #3d3d3d;
  width: 60%;
  height: 2rem;
  font-size: 14px;
  border-radius: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 5px 2px rgba(61, 61, 61, 0.3);
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h4`
  color: #3d3d3d;
  background-color: #eae9e5;
  margin: 0.5rem 0;
  text-align: center;
`;

const CardDescription = styled.p`
  color: #3d3d3d;
  background-color: #eae9e5;
  text-align: center;
  margin: 0.5rem;
  font-size: 14px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eae9e5;
`;

const ProjectCard = ({ title, description, imgUrl, gitLink }) => {
  return (
    <CardContainer>
      <div style={{ backgroundColor: "#eae9e5" }}>
        <CardTitle>{title}</CardTitle>
        <ImgWrapper>
          <img src={imgUrl} style={{ width: "11rem", height: "6rem" }} />
        </ImgWrapper>
        <CardDescription>{description}</CardDescription>
      </div>
      <ButtonWrapper>
        <StyledButton onClick={() => window.open(gitLink, "_blank")}>
          GitHub Link
        </StyledButton>
      </ButtonWrapper>
    </CardContainer>
  );
};

export default ProjectCard;
