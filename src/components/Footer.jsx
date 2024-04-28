import { Facebook, Instagram, LinkedIn, MailOutline, MapOutlined, PhoneAndroidOutlined, WhatsApp } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import pay from "../Images/pay.png"

const Container = styled.div`
  display: flex;
  height: 40vh;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Logo = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;

const Description = styled.p`
  line-height: 1.5;
  letter-spacing: 1px;
`;

const IconsContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 350px;

`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const Right = styled.div`
    display: flex;
    min-width: 350px;

    flex-direction: column;
    flex: 1;
    height: 85%;
    padding: 20px;
    justify-content: space-between;
`;
const ContactItem=styled.div`
display: flex;
align-items: center;`

const Span=styled.span`
margin-left:10px;`
const PaymentImg=styled.img``

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Description>
          There are many dolor, sit amet consectetur adipisicing elit. Amet,
          illum deleniti doloremque a quae rem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Labore, quas.
        </Description>
        <IconsContainer>
          <Icon color="#3b5999">
            <Facebook />
          </Icon>
          <Icon color="#00d500">
            <WhatsApp />
          </Icon>
          <Icon color="#0077b5">
            <LinkedIn />
          </Icon>
          <Icon color="#e4405f">
            <Instagram />
          </Icon>
        </IconsContainer>
      </Left>
      <Center>
        <Title>Usefull links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accsessoris</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><MapOutlined/> <Span>622 Dixie path , south america</Span></ContactItem>
        <ContactItem><PhoneAndroidOutlined/> <Span>+201119640792</Span> </ContactItem>
        <ContactItem><MailOutline/> <Span>mohamedelmanily123@yahoo.com</Span></ContactItem>
        <ContactItem><PaymentImg src={pay}></PaymentImg></ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
