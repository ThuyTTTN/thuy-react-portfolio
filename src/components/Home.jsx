import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import TrackVisibility from "react-on-screen";
import watercolorBanner from "../assets/watercolor-splash-banner.png";

const Container = styled.div`
  display: flex;
  padding: 2rem;
`;
const TextContainer = styled.div`
  justify-content: space-between;
`;
const NameText = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: #c48f7f;
`;
const TextTick = styled.div`
  font-size: 2rem;
  color: #eae9e5;
`;
const Title = styled.div`
  font-size: 3rem;
  color: #eae9e5;
`;
const StyledButton = styled.button`
  width: 15rem;
  height: 3rem;
  font-size: 1.5rem;
  color: 3d3d3d;
  font-weight: 500;
  background-color: #eae9e5;
  border-radius: 15px;
  margin: 2rem;
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
        </TextContainer>
        <div>
          <img
            src={watercolorBanner}
            alt="Header Img"
            width="450"
            height="450"
            className={animationClass}
          />
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
      <StyledButton onClick={() => console.log("Send to contact page")}>
        Let's Connect!
      </StyledButton>
    </>
  );
};

export default Home;
