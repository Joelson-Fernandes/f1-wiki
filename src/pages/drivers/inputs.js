/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Inputs({ searchText, setPilotSearch, setSearchSort }) {
  return (
    <SearchFor>
      <select onChange={setSearchSort}>
        <option defaultValue>Filtro</option>
        <option value="a-z">a - z</option>
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
    padding: 6px;
    height: 32px;
    color: #707b81;
    margin-left: 15px;
    border: none;
    border-radius: 6px 6px 0px 0px;
    border-bottom: 2px solid red;
    background-color: RGBA(204, 204, 204, 0.33);
  }
`;

export default Inputs;
