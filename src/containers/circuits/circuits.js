import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Header } from '../styles';
import { circuitByYear } from './api/getCircuits';
import Inputs from '../../components/search/input';
import CircuitList from './circuitList';

function Circuits() {
  const [circuitSearchText, setCircuitSearchText] = useState('');
  const [searchSort, setSearchSort] = useState('');
  const [season, setSeason] = useState(Number);
  const [dataPerSeason, setDataPerSeason] = useState(Number);

  useEffect(() => {
    // Busca circuito por seção
    async function getCircuitByYear(year) {
      const res = await circuitByYear(year);
      setDataPerSeason(res);
    }

    getCircuitByYear(season);
  }, [season]);

  const data = dataPerSeason || useLoaderData();

  return (
    <Container>
      <Header>
        <h2>Circuitos</h2>
        <Inputs
          setSearchText={setCircuitSearchText}
          searchText={circuitSearchText}
          setSearchSort={setSearchSort}
          setSeason={setSeason}
        />
      </Header>

      <CircuitList
        searchSort={searchSort}
        circuitSearchText={circuitSearchText}
        data={data}
      />
    </Container>
  );
}

export default Circuits;
