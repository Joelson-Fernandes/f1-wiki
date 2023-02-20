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
        <Title>WIKI</Title>
        <div>
          <ThemeButton />
        </div>
      </Nav>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.header`
  width: 95%;
  margin: 0 auto;
  border-right: 2px solid red;
  border-bottom: 2px solid red;
  border-bottom-right-radius: 15px;
`;

const Nav = styled.nav`
  padding: 15px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    width: 100%;
    justify-content: end;

    @media (max-width: 500px) {
      display: none;
    }
  }
  img {
    @media (max-width: 500px) {
      width: 100px;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Faster One', cursive;
  color: red;
  font-size: 55px;
  margin-left: 40px;

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;
