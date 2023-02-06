/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import styled from 'styled-components';
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
    <Container>
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
    </Container>
  );
}

export default TeamsList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 8px 15px;

  // nav paginação
  nav {
    display: flex;
    justify-content: center;
    width: 95%;
    padding: 15px 0;
    border-bottom: 2px solid red;

    button {
      &.MuiPaginationItem-root {
        color: ${(props) => props.theme.title};
        border: 2px solid red;

        &:hover {
          color: #fff;
          background-color: red;
          border: 2px solid ${(props) => props.theme.background};
        }
      }
      &.Mui-selected {
        color: #fff;
        background-color: red;
      }
    }

    div {
      color: ${(props) => props.theme.title};
    }
  }
`;
