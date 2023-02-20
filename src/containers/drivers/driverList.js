/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { ContainerBox } from '../styles';
import DriverListCard from './driverListCard';

function DriversList({ data, pilotSearch, searchSort }) {
  const drivers = data.MRData.DriverTable.Drivers;

  // filtro de busca por texto
  const pilotTextSearch =
    pilotSearch && pilotSearch.length > 2
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
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(driversFiltered.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = driversFiltered.slice(startIndex, endIndex);

  const handleChange = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    setPage(1);
  }, [drivers, driversFiltered]);

  return (
    <ContainerBox>
      {currentData.map((driver) => {
        return <DriverListCard driver={driver} key={driver.driverId} />;
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

export default DriversList;
