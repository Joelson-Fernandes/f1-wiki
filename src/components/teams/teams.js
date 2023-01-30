import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { ergastAPI } from '../../lib/axios';
import Inputs from './inputs';
import TeamsList from './teamsList';

function Teams() {
  const [teamSearchText, setTeamSearchText] = useState('');
  const [searchSort, setSearchSort] = useState('');
  const [season, setSeason] = useState(Number);
  const [dataPerSeason, setDataPerSeason] = useState(Number);

  useEffect(() => {
    // Busca construtor por seção
    async function teamSearchByYear(year) {
      try {
        const { data } = await ergastAPI.get(
          `${year.target.value}/constructors.json`,
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
        setTeamSearch={setTeamSearchText}
        setSearchSort={setSearchSort}
        setSeason={setSeason}
        teamSearch={teamSearchText}
      />
      <TeamsList
        searchSort={searchSort}
        teamSearchText={teamSearchText}
        data={data}
      />
    </Container>
  );
}

export default Teams;

const Container = styled.section``;
