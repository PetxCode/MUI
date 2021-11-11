import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Nav to="/">Home</Nav>
          <Nav to="/test1">Test 1</Nav>
          <Nav to="/test2">Test 2</Nav>
          <Nav to="/test3">Test 3</Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

const Nav = styled(NavLink)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  border-radius: 3px;
  transition: all 350ms;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;

  &.active {
    background-color: rgba(255, 255, 255, 0.45);
  }

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #004080;
`;
