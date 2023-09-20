import React, { useState, useEffect } from "react";
import styled from "styled-components";
import watercolorBanner from "../assets/watercolor-splash-banner.png";

const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-left: 3rem;
  padding: 2rem;
  justify-content: space-between;
`;

const TextContainer = styled.div``;

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
`;

const StyledImage = styled.img`
  width: 450px;
  height: auto;

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
    width: 400px;
  }
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

  const HandleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setAnimationClass("animate_animated animate_zoomIn");
    } else {
      setAnimationClass("");
    }
  };

  return (
    <>
      <Container>
        <TextContainer>
          <Title>Hello, My name is</Title>
          <NameText>Thuy Nguyen</NameText>
          <TextTick>{text}</TextTick>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <StyledButton onClick={() => console.log("Send to contact page")}>
              Let's Connect!
            </StyledButton>
          </div>
        </TextContainer>
        <div style={{ marginLeft: "3rem" }}>
          <StyledImage src={watercolorBanner} alt="Header Img" />
        </div>
        {/* <TrackVisibility onChange={HandleVisibilityChange}>
        {({ isVisible }) => (
          <img
            src={watercolorBanner}
            alt="Header Img"
            width="450"
            height="450"
            className={animationClass}
          />
        )}
      </TrackVisibility> */}
      </Container>
    </>
  );
};

export default Home;
