/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import CircuitModal from './circuitModal';
import { Button, Card, Photo, Descriptions, BoxModal } from '../styles';
import { getThumbnail } from '../../util/getImageWiki';

function CircuitListCard({ circuit }) {
  const circuitPhoto = getThumbnail(circuit).data;
  const [openModal, setOpenModal] = useState(false);
  console.log(circuit);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        onClose={() => setOpenModal(false)}
      >
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

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <BoxModal style={{ widht: '100%' }}>
          <CircuitModal
            params={circuit}
            open={openModal}
            setOpenModal={setOpenModal}
          />
        </BoxModal>
      </Modal>
    </>
  );
}

export default CircuitListCard;
