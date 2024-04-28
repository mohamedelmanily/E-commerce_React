import React from "react";
import styled from "styled-components";
import BackImg from "../Images/background.jpg";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackImg});
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background-color: white;
  padding: 30px;
  border-radius: 5px;
`;
const Title = styled.h1`
  font-weight: 500;
`;
const Input = styled.input`
  padding: 10px;
  border: 1px solid #cecec4;
  font-size: 16px;
`;
const Button = styled.button`
  width: 50%;
  height: 50px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: teal;
  border: 1px solid black;
  transition: all.3s;
  &:hover{
    background-color: #00a7a7;

  }
`;
const A = styled.a`
text-decoration:underline;
cursor: pointer;
text-transform:uppercase;
color: #009;`;
const SignIn = () => {
  return (
    <Container>
      <SignContainer>
        <Title>SIGN IN</Title>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>LOGIN</Button>
        <A>do not tou remember the password?</A>
        <A>create a new account</A>
      </SignContainer>
    </Container>
  );
};

export default SignIn;
