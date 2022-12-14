/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Pagination } from '@mui/material';
import DriverListCard from './driverListCard';

function DriversList({ data, pilotSearch, searchSort }) {
  const drivers = data.MRData.DriverTable.Drivers;

  // filtro de busca por texto
  const pilotTextSearch = pilotSearch
    ? drivers.filter((item) => {
        const name = `${item.givenName} ${item.familyName}`;
        return name.toLowerCase().includes(pilotSearch.toLowerCase());
      })
    : drivers;

  // filtra pilotos em ordem alfabetica
  const driversFiltered =
    searchSort && searchSort.target.value === 'a-z'
      ? pilotTextSearch.sort((a, b) =>
          a.givenName.toLowerCase() > b.givenName.toLowerCase() ? 1 : -1
        )
      : pilotTextSearch;

  // variaveis de páginação
  const [currentPage, setCurrentPage] = useState(0);
  const page = 9;
  const count = Math.ceil(drivers.length / page);
  const startIndex = currentPage * page;
  const endIndex = startIndex + page;
  const currentData = driversFiltered.slice(startIndex, endIndex);

  const handleChange = (e, p) => {
    setCurrentPage(p - 1);
  };

  return (
    <Container>
      {currentData.map((driver) => {
        return <DriverListCard driver={driver} key={driver.driverId} />;
      })}
      <Pagination
        count={count}
        onChange={handleChange}
        siblingCount={0}
        shape="rounded"
      />
    </Container>
  );
}

export default DriversList;

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
