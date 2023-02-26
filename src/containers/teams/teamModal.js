/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function TeamModal({ setOpenModal, data }) {
  return (
    <>
      <Button type="button" onClick={() => setOpenModal(false)} />
      <Card>
        <Description>
          <h2>{`${data.name}`}.</h2>
          <p>
            Nacionalidade: <span>{`${data.nationality}`}</span>.
          </p>
          {data.biography !== undefined ? <p>{`${data.biography}`}</p> : null}
          <a href="dfgd" target="_blank" rel="noreferrer">
            Biografia
          </a>
        </Description>
      </Card>
    </>
  );
}

export default TeamModal;

const Button = styled.div`
  position: relative;
  float: right;
  width: 32px;
  height: 32px;
  top: 32px;
  border-radius: 0px 15px 0px 15px;
  z-index: 101;
  background: rgba(245, 14, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 60%;
    height: 4px; /* cross thickness */
    background-color: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 0px 15px 0px 15px;

  img {
    max-width: 300px;
    border-radius: 0px 15px 0px 15px;
  }

  @media screen and (max-width: 1020px) {
    justify-content: center;
  }
`;

const Description = styled.div`
  padding: 15px;
  h2 {
    color: ${(props) => props.theme.title};
    margin: 5px 0;
  }

  a {
    text-decoration: underline;
    color: #000;
  }
`;
