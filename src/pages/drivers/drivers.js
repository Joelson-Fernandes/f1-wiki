/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { ergastAPI } from '../../lib/axios';
import DriversList from './driverList';
import Inputs from './inputs';

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
  const [pilotSearch, setPilotSearch] = useState('');
  const [searchSort, setSearchSort] = useState('');
  const data = useLoaderData();

  return (
    <Container>
      <Inputs
        pilotSearch={pilotSearch}
        setPilotSearch={setPilotSearch}
        setSearchSort={setSearchSort}
      />
      <DriversList
        data={data}
        pilotSearch={pilotSearch}
        searchSort={searchSort}
      />
    </Container>
  );
}

export default Drivers;

const Container = styled.section``;
