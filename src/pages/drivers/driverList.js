/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function DriversList({ drivers }) {
  return (
    <Container>
      {drivers.Drivers.map((driver, i) => {
        return (
          <Card key={i}>
            <h1>Name: {driver.givenName + driver.familyName}</h1>
          </Card>
        );
      })}
    </Container>
  );
}

export default DriversList;

const Container = styled.div`
  display: flex;
  border: 1px solid red;
  color: #fff;
`;

const Card = styled.div`
  border: 1px solid green;
`;
