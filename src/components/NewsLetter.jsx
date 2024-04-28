import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
const H1 = styled.h1`
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const H4 = styled.h4`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 20px;
`;
const SendBox = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
`;
const Input = styled.input`
  border: 1px solid #cecece;
  padding: 10px;
  flex: 8;
  outline: none;
  font-size: 16px;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  background-color: #037272;
  color: white;
  cursor: pointer;
`;
const NewsLetter = () => {
  return (
    <Container>
      <H1>Newsletter</H1>
      <H4>Get timely update for your favorite products</H4>
      <SendBox>
        <Input placeholder="Your email"/>
        <Button>
          <Send />
        </Button>
      </SendBox>
    </Container>
  );
};

export default NewsLetter;
