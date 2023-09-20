import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 2rem;
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

const StyledButton = styled.button`
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked submit", formData);
    if (!errorMessage) {
      setFormData({ [e.target.name]: e.target.value });
      console.log("Form", formData);
    }
  };

  return (
    <Container>
      <Title>Contact me</Title>
      <Text>Let's Connect! Email me at ttruong06@gmail.com</Text>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            width: "100%",
          }}
        >
          <StyledLabel>
            <StyledInput
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </StyledLabel>
          <StyledTextarea>
            <StyledInputMessage
              type="textarea"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </StyledTextarea>
          <StyledButton type="submit">Submit</StyledButton>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
