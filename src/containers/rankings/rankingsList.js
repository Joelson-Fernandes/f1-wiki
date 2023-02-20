/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { ContainerBox } from '../styles';
import RankingsListCard from './rankingsListCard';

function RankingsList({ data, searchText }) {
  const standings = data.MRData.StandingsTable.StandingsLists;

  // filtra busca por texto
  const standingsFiltered =
    searchText && searchText.length > 2
      ? standings.filter((item) => {
          const year = item.season;
          return year.toLowerCase().includes(searchText.toLowerCase());
        })
      : standings;

  // variaveis de páginação
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(standingsFiltered.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = standingsFiltered.slice(startIndex, endIndex);

  const handleChange = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    setPage(1);
  }, [standings, standingsFiltered]);

  return (
    <ContainerBox>
      {currentData.map((ranked) => {
        return <RankingsListCard ranked={ranked} key={ranked.season} />;
      })}
      <Pagination
        page={page}
        count={count}
        onChange={handleChange}
        siblingCount={0}
        shape="rounded"
      />
    </ContainerBox>
  );
}

export default RankingsList;
