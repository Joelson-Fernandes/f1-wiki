import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../styles/globalStyles';

function LoadingSpinner() {
  return (
    <Container>
      <LdsSpinner />
      <GlobalStyles />
    </Container>
  );
}

export default LoadingSpinner;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LdsSpinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${(props) => props.theme.cardDrivers.title} transparent
      ${(props) => props.theme.cardDrivers.title} transparent;
    animation: ldsSpinner 1.2s linear infinite;
  }
  @keyframes ldsSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
