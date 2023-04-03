import React, { useState, useEffect, useRef } from 'react';
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
  const containerRef = useRef(null);

  useEffect(() => {
    // Busca circuito por seção
    async function getCircuitByYear(year) {
      const res = await circuitByYear(year);
      setDataPerSeason(res);
    }

    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    getCircuitByYear(season);
  }, [season, containerRef]);

  const data = dataPerSeason || useLoaderData();

  return (
    <Container ref={containerRef}>
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
