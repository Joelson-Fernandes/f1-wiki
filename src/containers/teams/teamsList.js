/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { ContainerBox } from '../styles';
import TeamListCard from './teamListCard';

function TeamsList({ data, teamSearchText, searchSort }) {
  const teams = data.MRData.ConstructorTable.Constructors;

  // filtro de busca por texto
  const teamTextSearch =
    teamSearchText && teamSearchText.length > 2
      ? teams.filter((item) => {
          const { name } = item;
          return name.toLowerCase().includes(teamSearchText.toLowerCase());
        })
      : teams;

  // filtra construtores em ordem alfabetica
  const teamsFiltered =
    searchSort && searchSort.target.value === 'a-z'
      ? teamTextSearch.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        )
      : teamTextSearch;

  // variaveis de páginação
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(teamsFiltered.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = teamsFiltered.slice(startIndex, endIndex);

  const handleChange = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    setPage(1);
  }, [teams, teamsFiltered]);

  return (
    <ContainerBox>
      {currentData.map((team) => {
        return <TeamListCard team={team} key={team.constructorId} />;
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

export default TeamsList;
