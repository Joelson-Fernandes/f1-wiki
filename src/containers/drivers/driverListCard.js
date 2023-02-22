/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { getThumbnail } from '../../util/getImageWiki';
import DriverModal from './driverModal';
import { Button, Card, Photo, Descriptions, BoxModal } from '../styles';

function DriverListCard({ driver }) {
  const [openModal, setOpenModal] = useState(false);
  const driverName = `${driver.givenName} ${driver.familyName}`;
  const driverPhoto = getThumbnail(driver).data;

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        onClose={() => setOpenModal(false)}
      >
        <Card>
          <legend>
            <h1>{`${driverName}`}</h1>
          </legend>
          <Photo>
            <img src={driverPhoto} alt="piloto" />
          </Photo>
          <Descriptions>
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
            <a href={driver.url} target="_blank" rel="noreferrer">
              Biografia
            </a>
          </Descriptions>
        </Card>
      </Button>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <BoxModal>
          <DriverModal
            params={driver}
            open={openModal}
            setOpenModal={setOpenModal}
          />
        </BoxModal>
      </Modal>
    </>
  );
}

export default DriverListCard;
