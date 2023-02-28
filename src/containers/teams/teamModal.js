/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react';
import { ButtonModal, CardModal, DescriptionModal } from '../styles';

function TeamModal({ setOpenModal, data }) {
  return (
    <>
      <ButtonModal type="button" onClick={() => setOpenModal(false)} />
      <CardModal>
        <DescriptionModal>
          <h2>{`${data.name}`}.</h2>
          <p>
            Nacionalidade: <span>{`${data.nationality}`}</span>.
          </p>
          {data.biography !== undefined ? <p>{`${data.biography}`}</p> : null}
          <a href={data.url} target="_blank" rel="noreferrer">
            Biografia
          </a>
        </DescriptionModal>
      </CardModal>
    </>
  );
}

export default TeamModal;
