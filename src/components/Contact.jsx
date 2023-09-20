import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  margin-left: 3rem;
  margin-top: 1rem;
  flex-direction: column;
  width: 70%;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f4ddd5;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #eae9e5;
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  color: #3d3d3d;
`;

const StyledInput = styled.input`
  background-color: rgba(244, 221, 213, 0.8);
  height: 2.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 96.5%;
  font-size: 16px;
`;

const StyledTextarea = styled.label`
  color: #3d3d3d;
`;

const StyledInputMessage = styled.textarea`
  background-color: rgba(244, 221, 213, 0.8);
  font-size: 16px;
  height: 5rem;
  width: 96.5%;
  resize: none;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const StyledButtonInput = styled.button`
  background-color: #c48f7f;
  color: #3d3d3d;
  width: 100%;
  height: 2.5rem;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 700;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5lxqors",
        "template_tui9xxr",
        form.current,
        "aU7pe_1L_69odFqCq"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Title>Contact me</Title>
      <Text>Let's Connect! Email me at ttruong06@gmail.com</Text>
      <form ref={form} onSubmit={sendEmail}>
        <div
          style={{
            width: "100%",
          }}
        >
          <StyledLabel>
            <StyledInput type="text" name="user_name" placeholder="Name" />
          </StyledLabel>
          <StyledLabel>
            <StyledInput type="email" name="user_email" placeholder="Email" />
          </StyledLabel>
          <StyledTextarea>
            <StyledInputMessage
              type="textarea"
              name="message"
              placeholder="Message"
            />
          </StyledTextarea>
          <StyledButtonInput type="submit" value="Send">
            Send
          </StyledButtonInput>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
