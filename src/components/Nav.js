import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React from "react";
import styled from "styled-components";
import { mobile } from "../response";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "70px",
  })}
`;
const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 0px",
  })}
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  ${mobile({ justifyContent: "center", flex: "2" })}
`;

const Center = styled.div`
  text-align: center;
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  ${mobile({})}
`;

const Language = styled.option`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.1px solid;
  padding: 5px;
  margin-left: 30px;
  border-radius: 10px;
  ${mobile({
    marginLeft: "0px",
  })}
`;
const Input = styled.input`
  outline: none;
  padding-left: 5px;
  ${mobile({
    width: "50px",
  })}
`;
const Menuitem = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 30px;
  padding: 7px;
  cursor: pointer;
  opacity: 0.8;
  border: 1px solid #26d8ef;
  border-radius: 4px;
  ${mobile({
    border: "none",
    textAlign: "center",
    marginRight: "0px",
    fontSize: "16px",
  })}
`;
const Select = styled.select`
  ${mobile({
    display: "none",
  })}
`;

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Select>
            <Language>EN</Language>
            <Language>AR</Language>
          </Select>

          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Elmanily-BRAND..</Logo>
        </Center>
        <Right>
          <Menuitem>REGISTER</Menuitem>
          <Menuitem>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/sign-in"
            >
              SIGN IN
            </Link>
          </Menuitem>
          <Menuitem>
            <Link to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined className="cart" color="action" />
              </Badge>
            </Link>
          </Menuitem>
        </Right>
      </Wrapper>
      {<hr />}
    </Container>
  );
};

export default Nav;
