import axios from 'axios';

export const imgWiki = axios.create({
  baseURL: 'https://en.wikipedia.org/w/',
});

export const ergastAPI = axios.create({
  baseURL: 'http://ergast.com/api/f1/',
});
