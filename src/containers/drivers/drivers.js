/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Header } from '../styles';
import { driversByYear } from './api/getDrivers';
import DriversList from './driverList';
import Inputs from '../../components/search/input';

function Drivers() {
  const [pilotSearch, setPilotSearch] = useState('');
  const [searchSort, setSearchSort] = useState('');
  const [season, setSeason] = useState(Number);
  const [dataPerSeason, setDataPerSeason] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Busca pilotos por seção
    async function getDriversByYear(year) {
      const res = await driversByYear(year);
      return setDataPerSeason(res);
    }

    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    getDriversByYear(season);
  }, [season, containerRef]);

  const data = dataPerSeason || useLoaderData();

  return (
    <Container ref={containerRef}>
      <Header>
        <h2>Pilotos</h2>
        <Inputs
          searchText={pilotSearch}
          setSearchText={setPilotSearch}
          setSearchSort={setSearchSort}
          setSeason={setSeason}
        />
      </Header>

      <DriversList
        data={data}
        pilotSearch={pilotSearch}
        searchSort={searchSort}
      />
    </Container>
  );
}

export default Drivers;
