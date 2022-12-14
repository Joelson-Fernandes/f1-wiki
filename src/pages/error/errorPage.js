import React from 'react';
import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from '../../styles/globalStyles';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Error>
      <h1>Oops!</h1>
      <p>Desculpe. Algo inesperado aconteceu...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <GlobalStyles />
    </Error>
  );
}

export default ErrorPage;

const Error = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
