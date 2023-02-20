import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container } from '../styles';
import { rankingConstructors } from './api/getRankings';
import Inputs from './inputs';
import RankingsList from './rankingsList';

function Rankings() {
  const [searchText, setSearchText] = useState('');
  const [constructorRanking, setConstructorsRanking] = useState([]);
  const [ranking, setRanking] = useState('');

  useEffect(() => {
    async function getRankingConstructors() {
      const result = await rankingConstructors();
      return setConstructorsRanking(result);
    }

    getRankingConstructors();
  }, [ranking]);

  const data =
    ranking && ranking === '0' ? constructorRanking : useLoaderData();
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
