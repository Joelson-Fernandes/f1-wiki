/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';
import DriversClassification from './driversTable';
import ConstructorsClassification from './construcotorsTable';

function Classification() {
  const { driverClassification } = useLoaderData();
  const { constructorsClassification } = useLoaderData();
  return (
    <Container>
      <h1>Classificação</h1>

      <section>
        <DriversClassification driversClassification={driverClassification} />
        <ConstructorsClassification
          constructorsClassification={constructorsClassification}
        />
      </section>
    </Container>
  );
}

export default Classification;

const Container = styled.section`
  width: 95%;
  margin: 10px auto;
  padding: 15px;
  border-top: 2px solid red;
  background-image: ${(props) => props.theme.stripedBackground};
  h1,
  h2 {
    color: ${(props) => props.theme.title};
    text-align: center;
    padding: 10px;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
