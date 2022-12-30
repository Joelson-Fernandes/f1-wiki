/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { driverImgWiki } from '../../lib/axios';
import ProfilePicture from '../../assets/img/profile.png';

function PilotPhoto({ driverName }) {
  const [imgUrl, setImgURL] = useState('');

  useEffect(() => {
    driverImgWiki
      .get('api.php', {
        params: {
          action: 'query',
          prop: 'pageimages',
          format: 'json',
          titles: `${driverName}`,
          origin: '*',
          redirects: '',
        },
      })
      .then((res) => {
        const URLimg = res.data.query.pages[Object.keys(res.data.query.pages)]
          .thumbnail
          ? res.data.query.pages[Object.keys(res.data.query.pages)].thumbnail
              .source
          : ProfilePicture;

        setImgURL(URLimg.replaceAll('50px', '200px'));
      })
      .catch((e) => e);
  }, [driverName]);

  return (
    <Photo>
      <img src={imgUrl} alt="foto piloto" />
    </Photo>
  );
}

export default PilotPhoto;

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
