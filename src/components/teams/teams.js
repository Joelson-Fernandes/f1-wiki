import React from 'react';
import styled from 'styled-components';

function Teams() {
  return (
    <Container>
      <h1>Página em construção...</h1>
    </Container>
  );
}

export default Teams;

const Container = styled.div`
  max-width: 1400px;
  width: 100vw;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.title};
`;
