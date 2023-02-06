import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { ergastAPI } from '../../lib/axios';
import Inputs from './inputs';
import CircuitList from './circuitList';

function Circuits() {
  const [circuitSearchText, setCircuitSearchText] = useState('');
  const [searchSort, setSearchSort] = useState('');
  const [season, setSeason] = useState(Number);
  const [dataPerSeason, setDataPerSeason] = useState(Number);

  useEffect(() => {
    // Busca construtor por seção
    async function teamSearchByYear(year) {
      try {
        const { data } = await ergastAPI.get(
          `${year.target.value}/circuits.json`,
          {
            params: {
              limit: 1000,
            },
          }
        );
        return setDataPerSeason(data);
      } catch (error) {
        return error;
      }
    }
    teamSearchByYear(season);
  }, [season]);

  const data = dataPerSeason || useLoaderData();

  return (
    <Container>
      <Inputs
        setCircuitSearch={setCircuitSearchText}
        setSearchSort={setSearchSort}
        setSeason={setSeason}
        searchText={circuitSearchText}
      />
      <CircuitList
        searchSort={searchSort}
        circuitSearchText={circuitSearchText}
        data={data}
      />
    </Container>
  );
}

export default Circuits;

const Container = styled.section``;
