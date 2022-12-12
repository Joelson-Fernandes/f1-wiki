/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { apiDataUrl } from '../../lib/axios';

function Drivers() {
  // const [imgURL, setImgURL] = useState('');
  const [data, setData] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    /*
    driverImgWiki
      .get('api.php', {
        params: {
          action: 'query',
          prop: 'images',
          format: 'json',
          titles: 'Lewis Hamilton',
          origin: '*',
          redirects: '',
        },
      })
      .then((res) => {
        console.log(res.data.query);
        setImgURL(res.data.query.pages.pageimage);
      })
      .catch((e) => console.log(e));
      */

    apiDataUrl
      .get('drivers.json?=123', {
        params: {
          limit: 1000,
        },
      })
      .then((res) => {
        setData(res.data.MRData);
        setDrivers(res.data.MRData.DriverTable);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(data);
  console.log(drivers);

  return (
    <Container>
      <h1>Em desenvolvimento...</h1>
    </Container>
  );
}

export default Drivers;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;

  h1 {
    color: #fff;
  }
`;
