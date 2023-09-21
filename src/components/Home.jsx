import React, { useState, useEffect } from "react";
import styled from "styled-components";
import watercolor2 from "../assets/watercolor-splash2.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 2rem;
  width: 60%;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  height: 20rem;

  @media (min-width: 320px) {
    height: 10rem;
  }

  @media (min-width: 425px) {
    height: 12rem;
  }

  @media (min-width: 664px) {
    height: 20rem;
  }

  @media (min-width: 960px) {
    height: 20rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  color: #eae9e5;

  @media (min-width: 320px) {
    font-size: 1.5rem;
  }

  @media (min-width: 425px) {
    font-size: 1.5rem;
  }

  @media (min-width: 664px) {
    font-size: 2.5rem;
  }

  @media (min-width: 960px) {
    font-size: 2.5rem;
  }
`;

const NameText = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: #c48f7f;
  margin: 1rem 0;
  text-shadow: 2px 2px 10px black;

  @media (min-width: 320px) {
    font-size: 2rem;
  }

  @media (min-width: 425px) {
    font-size: 2rem;
  }

  @media (min-width: 664px) {
    font-size: 2.3rem;
  }

  @media (min-width: 890px) {
    font-size: 3.5rem;
  }
`;

const TextTick = styled.div`
  font-size: 2rem;
  color: #eae9e5;
  margin-left: 0.5rem;
  margin-bottom: 10rem;

  @media (min-width: 320px) {
    font-size: 1.5rem;
  }

  @media (min-width: 425px) {
    font-size: 1.5rem;
  }

  @media (min-width: 664px) {
    font-size: 1.75rem;
  }

  @media (min-width: 890px) {
    font-size: 2rem;
  }
`;

const StyledButton = styled.button`
  width: 15rem;
  height: 3rem;
  font-size: 1.5rem;
  color: 3d3d3d;
  font-weight: 500;
  background-color: #eae9e5;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 450px;
  height: auto;
  margin-left: 5rem;
  margin-top: 1.5rem;

  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;

  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50px);
    }
  }

  @media (min-width: 320px) {
    width: 200px;
  }

  @media (min-width: 425px) {
    width: 250px;
  }

  @media (min-width: 664px) {
    width: 300px;
  }

  @media (min-width: 960px) {
    width: calc();
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

const Home = () => {
  //looping through words
  const [loopNum, setLoopNum] = useState(0);
  //words being typed out/deleted
  const [isDeleting, setIsDeleting] = useState(false);
  //displaying current text
  const [text, setText] = useState("");
  // rotating words
  const toRotate = [
    "Frontend Developer",
    "Mobile Developer",
    "Software Developer",
    "Software Engineer ",
  ];
  //time between each text typed out
  const period = 1000;
  //determines how fast each letter is typed
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const [index, setIndex] = useState(1);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Container>
      <div style={{ flexDirection: "column" }}>
        <TextContainer>
          <Title>Hello, My name is</Title>
          <NameText>Thuy Nguyen</NameText>
          <TextTick>{text}</TextTick>
        </TextContainer>
        <StyledLink to="/contact">
          <StyledButton>Let's Connect!</StyledButton>
        </StyledLink>
      </div>
      <div style={{ marginLeft: "3rem" }}>
        <StyledImage src={watercolor2} alt="Header Img" />
      </div>
    </Container>
  );
};

export default Home;
