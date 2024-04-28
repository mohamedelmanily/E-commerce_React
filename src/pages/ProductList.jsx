import React from "react";
import Nav from "../components/Nav";
import Announcment from "../components/Announcment";
import styled from "styled-components";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Title = styled.h1`
  padding: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Filter = styled.div``;
const Span = styled.span`
  font-size: 20px;
  margin-right: 10px;
  font-weight: 700;
`;
const Select = styled.select`
  border: 1px solid #cecece;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  font-size: 14px;
`;
const Option = styled.option`
color: darkcyan;
font-size: 16px;
`;

const ProductList = () => {
  return (
    <>
      <Nav />
      <Announcment />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <Span>Filter Products: </Span>{" "}
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Black</Option>
            <Option>White</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
            <Option>X-Large</Option>
          </Select>
        </Filter>
        <Filter>
          <Span>Sort Products: </Span>
          <Select>
            <Option>Newest</Option>
            <Option>Price(ads)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default ProductList;
