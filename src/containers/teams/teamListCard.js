/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import TeamModal from './teamModal';
import ProfilePicture from '../../assets/img/profile.png';
import { getImages } from '../../util/getImageWiki';
import { biography } from '../../util/getBiographyWiki';
import { Button, Photo, Card, Descriptions, BoxModal } from '../styles';

function TeamListCard({ team }) {
  const [openModal, setOpenModal] = useState(false);
  team.images = getImages(team).data;
  const thumbnail =
    team.images !== undefined && team.images[0] ? team.images[0].title : false;

  team.biography = biography(team).data;

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        onClose={() => setOpenModal(false)}
      >
        <Card>
          <legend>
            <h1>{team.name}</h1>
          </legend>
          <Photo>
            <img
              src={
                thumbnail
                  ? `https://en.wikipedia.org/w/index.php?title=Special:Redirect/file/${thumbnail}&width=300`
                  : `${ProfilePicture}`
              }
              alt="team"
            />
          </Photo>
          <Descriptions>
            <p>
              Nacionalidade: <span>{`${team.nationality}`}</span>
            </p>
            <p>{`${team.biography}`}</p>
            <a href={team.url} target="_blank" rel="noreferrer">
              Biografia
            </a>
          </Descriptions>
        </Card>
      </Button>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <BoxModal>
          <TeamModal
            data={team}
            thumbnail={thumbnail}
            open={openModal}
            setOpenModal={setOpenModal}
          />
        </BoxModal>
      </Modal>
    </>
  );
}

export default TeamListCard;
