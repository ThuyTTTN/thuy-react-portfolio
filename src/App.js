import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      {/* <div className="App">Hello</div> */}
      <NavBar />
      {/* <Home /> */}
      {/* <About /> */}
      <Projects />
      {/* <Contact /> */}
    </Container>
  );
}

export default App;
