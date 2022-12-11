import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <Nav>
      <Card>
        <Link to="pilotos">Pilotos</Link>
      </Card>
      <Card>
        <Link to="circuitos">circuitos</Link>
      </Card>
      <Card>
        <Link to="equipes">equipes</Link>
      </Card>
      <Card>
        <Link to="rankings">Rankings</Link>
      </Card>
    </Nav>
  );
}

export default Home;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const Card = styled.section`
  border: 1px solid red;
  width: 300px;
  height: 500px;
  margin: 10px;
`;

const Link = styled(NavLink)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
