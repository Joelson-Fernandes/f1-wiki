import React, { useState, useEffect, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container, Header } from '../styles';
import { teamByYear } from './api/getTeams';
import Inputs from '../../components/search/input';
import TeamsList from './teamsList';

function Teams() {
  const [teamSearchText, setTeamSearchText] = useState('');
  const [searchSort, setSearchSort] = useState('');
  const [season, setSeason] = useState(Number);
  const [dataPerSeason, setDataPerSeason] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Busca construtor por seção
    async function getTeamByYear(year) {
      const result = await teamByYear(year);
      return setDataPerSeason(result);
    }

    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    getTeamByYear(season);
  }, [season, containerRef]);

  const data = dataPerSeason || useLoaderData();

  return (
    <Container ref={containerRef}>
      <Header>
        <h2>Construtores</h2>
        <Inputs
          searchText={teamSearchText}
          setSearchText={setTeamSearchText}
          setSearchSort={setSearchSort}
          setSeason={setSeason}
        />
      </Header>

      <TeamsList
        searchSort={searchSort}
        teamSearchText={teamSearchText}
        data={data}
      />
    </Container>
  );
}

export default Teams;
