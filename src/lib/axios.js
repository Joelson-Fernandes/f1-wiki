import axios from 'axios';

export const driverImgWiki = axios.create({
  baseURL: 'https://en.wikipedia.org/w/',
});

export const apiDataUrl = axios.create({
  baseURL: 'http://ergast.com/api/f1/',
});
