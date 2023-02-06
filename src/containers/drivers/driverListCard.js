/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { getImage } from '../../util/getImageWiki';
import DriverModal from './driverModal';

function DriverListCard({ driver }) {
  const [openModal, setOpenModal] = useState(false);
  const driverName = `${driver.givenName} ${driver.familyName}`;
  const driverPhoto = getImage(driver).data;

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

const Photo = styled.div`
  border-radius: 0px 15px 0px 15px;
  -webkit-box-shadow: 7px -7px 0px -2px
    ${(props) => props.theme.cardDrivers.shadow};
  -moz-box-shadow: 7px -7px 0px -2px
    ${(props) => props.theme.cardDrivers.shadow};
  box-shadow: 7px -7px 0px -2px ${(props) => props.theme.cardDrivers.shadow};
  img {
    border-radius: 0px 15px 0px 15px;
    width: 120px;
    height: 120px;
  }
`;

const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
