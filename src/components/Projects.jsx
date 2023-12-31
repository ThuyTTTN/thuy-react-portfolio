import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import project1 from "../assets/project1-416.jpg";
import project2 from "../assets/project2-tech-blog.png";
import project3 from "../assets/project3-416.png";
import project4 from "../assets/project4-budget.png";
import project5 from "../assets/project5-416.jpg";
import project6 from "../assets/project6-ogsnkrs416.jpg";
import project7 from "../assets/jokesterScreenshot.png";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  margin-bottom: 3rem;
`;
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f4ddd5;
  margin-bottom: 2rem;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50rem;

  @media (min-width: 320px) {
    width: 15rem;
  }

  @media (min-width: 425px) {
    width: 15rem;
  }

  @media (min-width: 664px) {
    width: 35rem;
  }

  @media (min-width: 960px) {
    width: 50rem;
  }
`;

const Projects = () => {
  const listOfProjects = [
    {
      title: "Jokester",
      description: "Mobile app with silly animals telling fun jokes",
      imgUrl: project7,
      gitLink: "https://github.com/ThuyTTTN/Jokester",
    },
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
      <ProjectsWrapper>
        {listOfProjects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </ProjectsWrapper>
      <Footer />
    </Container>
  );
};

export default Projects;
