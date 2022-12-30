/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Inputs({ searchText, setPilotSearch, setSearchSort, setSeason }) {
  const years = [];
  for (let y = 1950; y <= new Date().getFullYear(); y += 1) {
    years.push(y);
  }

  return (
    <SearchFor>
      <select onChange={setSeason}>
        <option defaultValue>Ano</option>
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>

      <select onChange={setSearchSort}>
        <option defaultValue>Filtro</option>
        <option value="a-z">a - z</option>
      </select>

      <input
        placeholder="Piloto"
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
  padding: 14px;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;

  input,
  select {
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

  input {
    width: 100px;
  }
`;

export default Inputs;
