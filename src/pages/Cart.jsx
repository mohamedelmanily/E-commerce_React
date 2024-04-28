import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav.js";
import Announcment from "../components/Announcment.jsx";
import prod1 from "../Images/4.png";
import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;
const Top = styled.div`
  padding: 40px;
`;
const TopHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Links = styled.div``;
const A = styled.a`
  margin-right: 10px;
  text-decoration: underline;
`;
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  background-color: ${(props) => (props.color === "black" ? "black" : "white")};
  color: ${(props) => (props.color === "black" ? "white" : "black")};
  border: 2px solid
    ${(props) => (props.color === "black" ? "transparent" : "black")};
`;

const Bottom = styled.div`
  display: flex;
  padding: 20px 40px;
`;

const BottomProducts = styled.div`
  display: flex;
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
`;
const Text = styled.div``;
const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
`;
const Image = styled.img`
  width: 25%;
`;

const BottomQuantity = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-weight: 100;
`;

const HR = styled.hr`
  height: 1px;
  width: 100%;
  color: black;
`;

const Summary = styled.div`
  flex: 1;
  padding:  20px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border:1px solid;
  border-radius: 10px;
`;

const Item = styled.div`
display: flex;
justify-content:space-between;
font-weight: ${props=>props.type==="bold"&& "800"};
font-size: ${props=>props.type==="bold"&& "24px"};
`;
const ItemText = styled.span``;
const ItemPrice = styled.span``;
const Cart = () => {
  return (
    <>
      <Nav />
      <Announcment />
      <Container>
        <Title>YOUR BAG</Title>
        <Top>
          <TopHead>
            <Link to="/"><Button color="white">continue shopping</Button></Link>
            <Links>
              <A>Shopping Bag(2)</A>
              <A>Your Wishlist(0)</A>
            </Links>
            <Button color="black">checkout now</Button>
          </TopHead>
        </Top>
        <Bottom>
          <Products>
            <Product>
              <BottomProducts>
                <Image src={prod1} />
                <ProductInfo>
                  <Text>
                    <b>Product:</b> jessie thunder shirt
                  </Text>
                  <Text>
                    <b>ID:</b> 25412
                  </Text>
                  <Color />
                  <Text>
                    <b>Size:</b> 40
                  </Text>
                </ProductInfo>
              </BottomProducts>
              <BottomQuantity>
                <Icons>
                  <Add />
                  <Span>2</Span>
                  <Remove />
                </Icons>
                <Span>$30</Span>
              </BottomQuantity>
            </Product>
            <HR />
            <Product>
              <BottomProducts>
                <Image src={prod1} />
                <ProductInfo>
                  <Text>
                    <b>Product:</b> jessie thunder shirt
                  </Text>
                  <Text>
                    <b>ID:</b> 25412
                  </Text>
                  <Color />
                  <Text>
                    <b>Size:</b> 40
                  </Text>
                </ProductInfo>
              </BottomProducts>
              <BottomQuantity>
                <Icons>
                  <Add />
                  <Span>2</Span>
                  <Remove />
                </Icons>
                <Span>$30</Span>
              </BottomQuantity>
            </Product>
            <HR />
            <Product>
              <BottomProducts>
                <Image src={prod1} />
                <ProductInfo>
                  <Text>
                    <b>Product:</b> jessie thunder shirt
                  </Text>
                  <Text>
                    <b>ID:</b> 25412
                  </Text>
                  <Color />
                  <Text>
                    <b>Size:</b> 40
                  </Text>
                </ProductInfo>
              </BottomProducts>
              <BottomQuantity>
                <Icons>
                  <Add />
                  <Span>2</Span>
                  <Remove />
                </Icons>
                <Span>$30</Span>
              </BottomQuantity>
            </Product>
          </Products>

          <Summary>
            <Title>order summary</Title>
            <Item>
              <ItemText>Subtotal</ItemText>
              <ItemPrice>$80</ItemPrice>
            </Item>
            <Item>
              <ItemText>Estimated Shipping </ItemText>
              <ItemPrice>$5.90</ItemPrice>
            </Item>
            <Item>
            <ItemText>SHipping Discount</ItemText>
            <ItemPrice>$-5.90</ItemPrice>
          </Item>
          <Item type="bold">
            <ItemText>Total </ItemText>
            <ItemPrice>$80</ItemPrice>
          </Item>
          <Button color="black">checkout now</Button>
          </Summary>
          
        </Bottom>
      </Container>
    </>
  );
};

export default Cart;
