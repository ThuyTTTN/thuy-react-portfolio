import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  width: 50%;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f4ddd5;
  margin-bottom: 2rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #eae9e5;
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  color: #3d3d3d;
`;

const StyledInput = styled.input`
  background-color: rgba(234, 233, 229, 0.9);
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
  background-color: rgba(234, 233, 229, 0.9);
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
  width: 99%;
  height: 2.5rem;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 700;
  padding: 0.5rem;
  box-sizing: border-box;
  box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const StyledNotification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: #f4ddd5;
  border-radius: 5px;
  margin-bottom: 0.75rem;
`;

const NotificationText = styled.p`
  display: flex;
  align-items: center;
  color: #3d3d3d;
  background-color: #f4ddd5;
  font-size: 1rem;
  margin: 0.5rem;
`;

const NotificationButton = styled.button`
  background-color: #f4ddd5;
  border: none;
  font-weight: 700;
  cursor: pointer;
`;

const Contact = () => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);

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
          setShowNotification(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Title>Contact me</Title>
      <Text>Let's Connect! </Text>
      {showNotification && (
        <StyledNotification>
          <NotificationText>Message sent successfully!</NotificationText>
          <NotificationButton onClick={() => setShowNotification(false)}>
            X
          </NotificationButton>
        </StyledNotification>
      )}
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

      <Footer />
    </Container>
  );
};

export default Contact;
