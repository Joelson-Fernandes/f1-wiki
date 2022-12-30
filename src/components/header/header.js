import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ThemeButton from './themeButton';
import logo from '../../assets/logo/logo.png';

function Header() {
  return (
    <HeaderBar>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" width={150} />
        </NavLink>
        <Title>Wiki.</Title>
        <div>
          <ThemeButton />
        </div>
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
  align-items: center;
  border-bottom: 2px solid red;

  div {
    display: flex;
    width: 100%;
    justify-content: end;

    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Libre Barcode 39 Text', cursive;
  color: red;
  font-size: 45px;
  margin-left: 40px;
`;
