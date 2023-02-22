/* eslint-disable react/prop-types */
import React from 'react';
import ProfilePicture from '../../assets/img/profile.png';
import { getImages } from '../../util/getImageWiki';
import { biography } from '../../util/getBiographyWiki';
import { Button, Photo, Card, Descriptions } from '../styles';

function TeamListCard({ team }) {
  team.images = getImages(team).data;
  const thumbnail =
    team.images !== undefined && team.images[0] ? team.images[0].title : false;

  team.biography = biography(team).data;

  return (
    <Button>
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
  );
}

export default TeamListCard;
