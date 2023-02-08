/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
  width: 420px;
  padding: 2px;
  margin: 8px;
  border: none;
  background-color: transparent;
  text-align: start;
  cursor: pointer;
  border-radius: 0px 15px 0px 15px;
  -webkit-box-shadow: -7px 7px 0px -4px ${(props) => props.theme.cardDrivers.shadow};
  -moz-box-shadow: -7px 7px 0px -4px ${(props) => props.theme.cardDrivers.shadow};
  box-shadow: -7px 7px 0px -4px ${(props) => props.theme.cardDrivers.shadow};
`;

const Card = styled.fieldset`
  display: flex;
  height: 100%;
  padding: 15px;
  color: ${(props) => props.theme.cardDrivers.text};
  border: 3px solid ${(props) => props.theme.cardDrivers.border};
  border-radius: 0px 15px 0px 15px;
  background-color: ${(props) => props.theme.cardDrivers.background};
  position: relative;
  transition: 0.1s linear;

  h1 {
    color: ${(props) => props.theme.cardDrivers.title};
  }

  &:hover {
    animation: cards-animation 0.5s both;
  }

  @keyframes cards-animation {
    from {
      top: 0px;
      right: 0px;
    }
    to {
      top: -5px;
      right: -5px;
    }
  }
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  p,
  a,
  h3 {
    margin: 5px;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.title};
    width: 100px;

    &:hover {
      color: ${(props) => props.theme.cardDrivers.border};
    }
  }
`;
