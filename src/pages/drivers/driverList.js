/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import DriverListCard from './driverListCard';

function DriversList({ drivers }) {
  console.log(drivers);

  return (
    <Container>
      {drivers.Drivers.map((driver) => {
        return <DriverListCard driver={driver} />;
      })}
    </Container>
  );
}

export default DriversList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
`;
