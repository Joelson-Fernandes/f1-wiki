/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Inputs({ searchText, setSearchText, setRanking, ranking }) {
  return (
    <SearchFor>
      <h1>Ranking {ranking === '0' ? 'Construtores' : 'Pilotos'}</h1>
      <div>
        <Button
          type="button"
          value={1}
          onClick={(ev) => setRanking(ev.target.value)}
        >
          Pilotos
        </Button>
        <Button
          type="button"
          value={0}
          onClick={(ev) => setRanking(ev.target.value)}
        >
          Construtores
        </Button>
        <input
          placeholder="Ano"
          type="search"
          value={searchText}
          onChange={(ev) => setSearchText(ev.target.value)}
        />
      </div>
    </SearchFor>
  );
}

const SearchFor = styled.div`
  border-bottom: 2px solid red;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    color: ${(props) => props.theme.title};
  }

  input {
    width: 100px;
    font-size: 16px;
    padding: 6px;
    height: 32px;
    color: #707b81;
    margin: 5px 0 5px 15px;
    border: none;
    border-radius: 6px 6px 0px 0px;
    border-bottom: 2px solid red;
    background-color: RGBA(204, 204, 204, 0.33);
  }
`;

const Button = styled.button`
  padding: 6px;
  margin-left: 10px;
  color: #fff;
  border-radius: 6px 0px 6px 0px;
  border: 2px solid red;
  background-color: red;
  cursor: pointer;
`;

export default Inputs;
