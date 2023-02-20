/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Inputs({ searchText, setSearchText, setSearchSort, setSeason }) {
  const years = [];
  for (let y = 1950; y <= new Date().getFullYear(); y += 1) {
    years.push(y);
  }

  return (
    <SearchFor>
      <select onChange={setSeason}>
        <option disabled defaultValue>
          Ano
        </option>
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
        placeholder="Buscar"
        type="search"
        value={searchText}
        onChange={(ev) => setSearchText(ev.target.value)}
      />
    </SearchFor>
  );
}

const SearchFor = styled.div`
  input,
  select {
    font-size: 16px;
    padding: 6px;
    height: 32px;
    color: #707b81;
    margin: 5px 15px 5px 0px;
    border: none;
    border-radius: 6px 6px 0px 0px;
    border-bottom: 2px solid red;
    background-color: RGBA(204, 204, 204, 0.33);
  }

  input {
    width: 90px;
  }
`;

export default Inputs;
