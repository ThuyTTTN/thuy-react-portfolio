import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  //   justify-content: space-between;
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

const StyledLabel = styled.label`
  color: #3d3d3d;
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: rgba(244, 221, 213, 0.8);
  height: 2.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 12.5rem;
  margin-right: 1.5rem;
`;

const StyledTextarea = styled.label`
  color: #3d3d3d;
  display: flex;
  //   flex-direction: column;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #c48f7f;
  color: #3d3d3d;
  width: 30%;
  height: 2.5rem;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const StyledInputMessage = styled.textarea`
  background-color: rgba(244, 221, 213, 0.8);
  height: 5rem;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 0.5rem;
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
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
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
        </div>

        <StyledTextarea>
          <StyledInputMessage
            type="textarea"
            name="message"
            placeholder="Message"
            value={formData.name}
            onChange={handleInputChange}
          />
        </StyledTextarea>
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </Container>
  );
};

export default Contact;
