/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { Table, Th, Tr, Td, Container } from './styled';

function DriversClassification({ driversClassification }) {
  const classificationArr =
    driversClassification.data.MRData.StandingsTable.StandingsLists[0]
      .DriverStandings;
  const classification = [];

  for (let index = 0; index < classificationArr.length; index += 1) {
    const element = classificationArr[index];
    classification.push({
      pos: `${element.position} º`,
      piloto: element.Driver.familyName,
      pontos: element.points,
      vitorias: element.wins,
    });
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Pos.',
        accessor: 'pos',
      },
      {
        Header: 'Piloto',
        accessor: 'piloto',
      },
      {
        Header: 'PTS.',
        accessor: 'pontos',
      },
      {
        Header: 'VIT.',
        accessor: 'vitorias',
      },
    ],
    []
  );

  const data = useMemo(() => classification.map((i) => i), []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Container>
      <h2>Pilotos</h2>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default DriversClassification;
