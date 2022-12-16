/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import DriverListCard from './driverListCard';

function DriversList({ data, pilotSearch }) {
  const drivers = data.MRData.DriverTable.Drivers;

  // filtro de busca por texto
  const driversFiltered = pilotSearch
    ? drivers.filter((item) => {
        const name = `${item.givenName} ${item.familyName}`;
        return name.toLowerCase().includes(pilotSearch.toLowerCase());
      })
    : drivers;

  return (
    <Container>
      {driversFiltered.map((driver) => {
        return <DriverListCard driver={driver} key={driver.driverId} />;
      })}
    </Container>
  );
}

export default DriversList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 8px 15px;
`;
