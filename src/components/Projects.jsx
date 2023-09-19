import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import project1 from "../assets/project1-416.jpg";
import project2 from "../assets/project2-tech-blog.png";
import project3 from "../assets/project3-416.png";
import project4 from "../assets/project4-budget.png";
import project5 from "../assets/project5-416.jpg";
import project6 from "../assets/project6-ogsnkrs416.jpg";

const Container = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  max-width: 75rem;
`;
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f4ddd5;
  margin-bottom: 2rem;
`;

const Projects = () => {
  const listOfProjects = [
    {
      title: "OG SNKRS",
      description: "MERN stack E-commerce for sneaker enthusiast",
      imgUrl: project6,
      gitLink: "https://github.com/ThuyTTTN/OG-SNKRS",
    },
    {
      title: "Sweet Nostalgia",
      description:
        "A Fullstack E-commerce application for monthly subscription of candies from specific decades.",
      imgUrl: project1,
      gitLink: "https://github.com/ThuyTTTN/Sweet-Nostalgia",
    },
    {
      title: "Tech Blog",
      description: "CMS style tech blog.",
      imgUrl: project2,
      gitLink: "https://github.com/ThuyTTTN/tech-blog",
    },
    {
      title: "Weather Dashboard",
      description: "Front end API weather dashboard.",
      imgUrl: project3,
      gitLink: "https://github.com/ThuyTTTN/weather-dashboard",
    },
    {
      title: "Budget Tracker",
      description:
        "PWA budget tracker that can be used with no internet connection",
      imgUrl: project4,
      gitLink: "https://github.com/ThuyTTTN/PWA-budget-tracker",
    },
    {
      title: "Florida's Hungry",
      description:
        "Front end application to locate restaurants in specific cities.",
      imgUrl: project5,
      gitLink: "https://github.com/ThuyTTTN/Florida-s-hungry",
    },
  ];
  return (
    <Container>
      <Title>Projects</Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
          border: "1px solid yellow",
        }}
      >
        {listOfProjects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </Container>
  );
};

export default Projects;
