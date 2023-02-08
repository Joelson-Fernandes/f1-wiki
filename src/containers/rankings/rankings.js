import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { ergastAPI } from '../../lib/axios';
import Inputs from './inputs';
import RankingsList from './rankingsList';

function Rankings() {
  const [searchText, setSearchText] = useState('');
  const [rankingConstructors, setRankingConstructors] = useState([]);
  const [ranking, setRanking] = useState('');

  useEffect(() => {
    async function getRankingConstructors() {
      try {
        const { data } = await ergastAPI.get('constructorStandings/1.json', {
          params: {
            limit: 1000,
          },
        });
        return setRankingConstructors(data);
      } catch (error) {
        return error;
      }
    }
    getRankingConstructors();
  }, [ranking]);

  const data =
    ranking && ranking === '0' ? rankingConstructors : useLoaderData();
  return (
    <Container>
      <Inputs
        searchText={searchText}
        setSearchText={setSearchText}
        ranking={ranking}
        setRanking={setRanking}
      />
      <RankingsList data={data} searchText={searchText} />
    </Container>
  );
}

export default Rankings;

const Container = styled.section``;
