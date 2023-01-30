/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function TeamListCard({ team }) {
  return (
    <Button>
      <Card>
        <legend>
          <h1>{`${team.name}`}</h1>
        </legend>
        <Descriptions>
          <p>
            Nacionalidade: <span>{`${team.nationality}`}</span>
          </p>
          <a href={team.url} target="_blank" rel="noreferrer">
            Biografia
          </a>
        </Descriptions>
      </Card>
    </Button>
  );
}

export default TeamListCard;

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
  a {
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
