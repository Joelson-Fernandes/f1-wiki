/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card, Photo, Descriptions } from '../styles';
import { getThumbnail } from '../../util/getImageWiki';

function CircuitListCard({ circuit }) {
  const circuitPhoto = getThumbnail(circuit).data;

  return (
    <Button>
      <Card>
        <legend>
          <h1>{`${circuit.circuitName}`}</h1>
        </legend>
        <Photo>
          <img src={circuitPhoto} alt="piloto" />
        </Photo>
        <Descriptions>
          <p>
            País: <span>{`${circuit.Location.country}`}</span>
          </p>
          <p>
            localização: <span>{`${circuit.Location.locality}`}</span>
          </p>
          <a href={circuit.url} target="_blank" rel="noreferrer">
            Biografia
          </a>
        </Descriptions>
      </Card>
    </Button>
  );
}

export default CircuitListCard;
