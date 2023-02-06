/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import styled from 'styled-components';
import CircuitListCard from './circuitListCard';

function CircuitList({ data, circuitSearchText, searchSort }) {
  const circuits = data.MRData.CircuitTable.Circuits;

  // filtro de busca por texto
  const circuitTextSearch =
    circuitSearchText && circuitSearchText.length > 2
      ? circuits.filter((item) => {
          const name = item.circuitName;
          return name.toLowerCase().includes(circuitSearchText.toLowerCase());
        })
      : circuits;

  // filtra construtores em ordem alfabetica
  const circuitsFiltered =
    searchSort && searchSort.target.value === 'a-z'
      ? circuitTextSearch.sort((a, b) =>
          a.circuitName.toLowerCase() > b.circuitName.toLowerCase() ? 1 : -1
        )
      : circuitTextSearch;

  // variaveis de páginação
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(circuitsFiltered.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = circuitsFiltered.slice(startIndex, endIndex);

  const handleChange = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    setPage(1);
  }, [circuits, circuitsFiltered]);

  return (
    <Container>
      {currentData.map((circuit) => {
        return <CircuitListCard circuit={circuit} key={circuit.circuitId} />;
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

export default CircuitList;

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
