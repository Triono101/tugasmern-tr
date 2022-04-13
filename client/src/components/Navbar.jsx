import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import axios from "axios";
import Product from "./Product";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: dodgerblue;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid dodgerblue;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 3px;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>IDN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "dodgerblue", fontSize: 24 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link
            style={{ color: "dodgerblue", textDecoration: "none" }}
            to="/"> SHINSEGAE </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link style={{ color: "dodgerblue", textDecoration: "none" }}
            to="/register"> DAFTAR </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ color: "dodgerblue", textDecoration: "none" }}
            to="/login"> SIGN IN </Link>
          </MenuItem>
          <Link 
                style={{
                  textDecoration: "none",
                  color: "dodgerblue"
                }}
                to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;