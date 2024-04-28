import React from "react";
import Nav from "../components/Nav";
import Announcment from "../components/Announcment";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const ProductContainer = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 70vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer=styled.div`
padding: 30px 0;
display: flex;
align-items: center;

`

const Filter=styled.div` 
background-color:${props=>props.color};
width: 20px;
height: 20px;
border-radius: 50%;
margin-right: 10px ;
display: flex;
align-items: center;

`
const Span =styled.span`margin: 10px;
font-size: 17px;
`

const SizeContainer=styled.div``

const Select=styled.select`border:1px solid #cecec4;
padding:3px 5px;
font-size: 15px;`

const Option=styled.option``

const AddingContainer=styled.div`
display: flex;
align-items:center;`

const Amount=styled.span`
width: 30px;
height: 30px;
font-size: 20px;
border: 1px solid teal;
border-radius: 5px;
margin: 0 10px;
display: flex;
justify-content: center;
align-items: center;
`
const Button=styled.button`
padding:10px;
border: 2px solid teal;
border-radius: 3px;
font-weight: 500;
cursor: pointer;
margin-left:30px;
background-color: white;
transition: all.2s;
&:hover{
    background-color:#e8e8e8 ;
}`
const Product = () => {
  return (
    <>
      <Nav />
      <Announcment />
      <ProductContainer>
        <ImageContainer>
          <Image src="https://images.pexels.com/photos/2229712/pexels-photo-2229712.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            dolor sit amet, consectetur adipisicing elit. Repellendus, non?
            Eaque, illo. Beatae officiis quibusdam consequuntur quia vero qui
            architecto rerum molestiae, earum, sint, ex temporibus recusandae
            quaerat similique dolorum.
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Span>Color</Span>
            <Filter color="#2c2caf"/>
            <Filter color="black"/>
            <Filter color="#004343"/>
            <SizeContainer>
                <Span>Size</Span> 
                <Select>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </SizeContainer>
          </FilterContainer>
          <AddingContainer>
            <Remove style={{ cursor: 'pointer' }}/>
            <Amount>1</Amount>
            <Add style={{ cursor: 'pointer' }}/>
            <Button>ADD TO CART</Button>
          </AddingContainer>
        </InfoContainer>
      </ProductContainer>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Product;
