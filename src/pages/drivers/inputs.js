/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Inputs({ searchText, setPilotSearch, setSearchSort }) {
  return (
    <SearchFor>
      <select onChange={setSearchSort}>
        <option defaultValue>Filtro</option>
        <option value="">.</option>
        <option value="">.</option>
      </select>

      <input
        placeholder="Buscar..."
        type="search"
        value={searchText}
        onChange={(ev) => setPilotSearch(ev.target.value)}
      />
    </SearchFor>
  );
}

const SearchFor = styled.div`
  width: 95%;
  margin: auto;
  border-bottom: 2px solid red;
  padding: 15px;
  display: flex;
  justify-content: end;
  align-items: center;

  input,
  select {
    font-size: 16px;
    border-width: 2px;
    border-style: solid;
    padding: 4px;
    border-color: #ff0000;
    height: 30px;
    color: #707b81;
    margin-left: 15px;
  }
`;

export default Inputs;
