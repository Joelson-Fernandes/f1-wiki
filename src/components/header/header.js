import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo/logo.png';

function Header() {
  return (
    <HeaderBar>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" width={150} />
        </NavLink>
        <Title>Wiki.</Title>
      </Nav>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  width: 95%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid red;
`;

const Title = styled.h1`
  font-family: 'Libre Barcode 39 Text', cursive;
  color: red;
  font-size: 45px;
  margin-left: 40px;
`;
