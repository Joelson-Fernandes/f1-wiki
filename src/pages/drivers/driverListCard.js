/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function DriverListCard({ driver }) {
  return (
    <Link to="/">
      <Card>
        <legend>
          <h1>{`${driver.givenName} ${driver.familyName}`}</h1>
        </legend>
        <p>
          Nacionalidade: <span>{`${driver.nationality}`}</span>
        </p>
        <p>
          Nascimento:
          <span>
            {` ${new Intl.DateTimeFormat('pt-BR').format(
              new Date(driver.dateOfBirth)
            )}`}
          </span>
        </p>
      </Card>
    </Link>
  );
}

export default DriverListCard;

const Link = styled(NavLink)`
  width: 420px;
  padding: 2px;
  margin: 8px;
  border-radius: 0px 15px 0px 15px;
  -webkit-box-shadow: -7px 7px 0px -4px ${(props) => props.theme.cardDrivers.shadow};
  -moz-box-shadow: -7px 7px 0px -4px ${(props) => props.theme.cardDrivers.shadow};
  box-shadow: -7px 7px 0px -4px ${(props) => props.theme.cardDrivers.shadow};
`;

const Card = styled.fieldset`
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
