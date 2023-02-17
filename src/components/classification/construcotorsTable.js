/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { Table, Th, Tr, Td, Container } from './styled';

function ConstructorsClassification({ constructorsClassification }) {
  const classificationArr =
    constructorsClassification.data.MRData.StandingsTable.StandingsLists[0]
      .ConstructorStandings;
  const classification = [];

  for (let index = 0; index < classificationArr.length; index += 1) {
    const element = classificationArr[index];
    classification.push({
      pos: `${element.position} º`,
      construtor: element.Constructor.name,
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
        Header: 'Construtor',
        accessor: 'construtor',
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
      <h2>Construtores</h2>
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

export default ConstructorsClassification;
