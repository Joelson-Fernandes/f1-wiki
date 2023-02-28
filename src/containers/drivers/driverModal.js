/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { ButtonModal, CardModal, DescriptionModal } from '../styles';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner';
import { getThumbnail } from '../../util/getImageWiki';
import { driverDetails } from './api/getDrivers';
import { DriverStats } from '../../util/driverStats';

function DriverModal({ params, setOpenModal }) {
  const { driverId } = params;
  const driverName = `${params.givenName} ${params.familyName}`;
  const data = driverDetails(driverId);
  const [isLoading, setIsLoading] = useState(true);
  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
    if (data.isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      setDriverData(data.data.MRData.StandingsTable.StandingsLists);
    }
  }, [data.isLoading]);

  const driverStats = DriverStats(driverData);
  const photoDriver = getThumbnail(params).data;

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ButtonModal type="button" onClick={() => setOpenModal(false)} />
          <CardModal>
            <img src={photoDriver} alt="piloto" />
            <DescriptionModal>
              <h2>{driverName}.</h2>
              <p>
                Nacionalidade: <span>{`${params.nationality}`}</span>.
              </p>
              <p>
                Nascimento:
                <span>
                  {` ${new Intl.DateTimeFormat('pt-BR').format(
                    new Date(params.dateOfBirth)
                  )}`}
                </span>
                .
              </p>
              <p>
                Temporadas: <span>{driverStats.seassons}.</span>
              </p>
              <p>
                Vitórias: <span>{driverStats.wins}.</span>
              </p>
              <p>
                Campeão mundial: <span>{driverStats.champion} </span> vezes.
              </p>
              {params.permanentNumber ? (
                <p>
                  Nº Permanente: <span>{params.permanentNumber}</span>.
                </p>
              ) : null}
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

export default DriverModal;
