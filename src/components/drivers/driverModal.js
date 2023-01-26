/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';
import { getPhotoDriver } from './api/getPilotPhoto';
import { DriverDetails } from './api/getDriver';
import { DriverStats } from '../../util/driverStats';

function DriverModal({ params, setOpenModal }) {
  const { driverId } = params;
  const driverName = `${params.givenName} ${params.familyName}`;
  const data = DriverDetails(driverId);
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
  const photoDriver = getPhotoDriver(driverName).data;

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Button type="button" onClick={() => setOpenModal(false)} />
          <Card>
            <img src={photoDriver} alt="piloto" />
            <Description>
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
            </Description>
          </Card>
        </>
      )}
    </div>
  );
}

export default DriverModal;

const Button = styled.div`
  position: relative;
  float: right;
  width: 32px;
  height: 32px;
  top: 32px;
  border-radius: 0px 15px 0px 15px;
  z-index: 101;
  background: rgba(245, 14, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 60%;
    height: 4px; /* cross thickness */
    background-color: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 0px 15px 0px 15px;

  img {
    max-height: 400px;
    border-radius: 0px 15px 0px 15px;
  }

  @media screen and (max-width: 1020px) {
    justify-content: center;
  }
`;

const Description = styled.div`
  padding: 15px;
  h2 {
    color: ${(props) => props.theme.title};
    margin: 5px 0;
  }

  a {
    text-decoration: underline;
    color: #000;
  }
`;
