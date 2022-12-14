/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { ergastAPI } from '../../lib/axios';
import DriversList from './driverList';

// Busca todos os pilotos
export async function getDrivers() {
  try {
    const { data } = await ergastAPI.get('drivers.json?=123', {
      params: {
        limit: 1000,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}

function Drivers() {
  const data = useLoaderData();
  const drivers = data.MRData.DriverTable;

  return (
    <Container>
      <Header>
        <h1>inputs de ordenação e busca</h1>
      </Header>
      <DriversList drivers={drivers} />
    </Container>
  );
}

export default Drivers;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 85vh;

  h1 {
    color: #fff;
  }
`;

const Header = styled.div`
  border: 1px solid red;
`;
