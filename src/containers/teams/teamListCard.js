/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card, Descriptions } from '../styles';

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
