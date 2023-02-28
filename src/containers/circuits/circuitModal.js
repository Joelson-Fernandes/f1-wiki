/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { ButtonModal, CardModal, DescriptionModal } from '../styles';
import { biography } from '../../util/getBiographyWiki';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner';

function CircuitModal({ params, setOpenModal }) {
  const [isLoading, setIsLoading] = useState(true);
  const data = biography(params);

  useEffect(() => {
    if (data.isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [data.isLoading]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ButtonModal type="button" onClick={() => setOpenModal(false)} />
          <CardModal>
            <DescriptionModal>
              <h2>{params.circuitName}.</h2>
              <p>{`${data.data}`}</p>
              <a href={params.url} target="_blank" rel="noreferrer">
                Biografia
              </a>
            </DescriptionModal>
          </CardModal>
        </>
      )}
    </div>
  );
}

export default CircuitModal;
