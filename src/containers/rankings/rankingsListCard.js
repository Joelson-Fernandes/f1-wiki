/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card, Descriptions } from '../styles';

function RankingsListCard({ ranked }) {
  const driver = ranked.DriverStandings ? ranked.DriverStandings[0].Driver : 0;
  const constructor = ranked.DriverStandings
    ? ranked.DriverStandings[0].Constructors
    : 0;
  const constructorRanked = ranked.ConstructorStandings
    ? ranked.ConstructorStandings[0].Constructor.name
    : 0;

  const points = ranked.DriverStandings
    ? ranked.DriverStandings[0].points
    : ranked.ConstructorStandings[0].points;
  const wins = ranked.DriverStandings
    ? ranked.DriverStandings[0].wins
    : ranked.ConstructorStandings[0].wins;

  return (
    <Button>
      <Card>
        <legend>
          <h1>{ranked.season}</h1>
        </legend>
        <Descriptions>
          {driver ? (
            <p>
              Campeão: <span>{`${driver.givenName} ${driver.familyName}`}</span>
            </p>
          ) : null}
          {constructorRanked ? <h3>{constructorRanked}</h3> : null}
          <p>
            Pontos: <span>{points}</span>
          </p>
          <p>
            Vitorias: <span>{wins}</span>
          </p>
          {driver ? (
            <p>
              Construtor: <span>{`${constructor[0].name}`}</span>
            </p>
          ) : null}
        </Descriptions>
      </Card>
    </Button>
  );
}

export default RankingsListCard;
