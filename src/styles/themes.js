import StripedBackground from '../assets/img/bg.png';
import StripedBackgroundWhite from '../assets/img/bg-white-stripe.png';

export const darkTheme = {
  palette: {
    mode: 'dark',
  },
  cardDrivers: {
    title: '#fff',
    text: '#fff',
    background: 'RGBA(103, 97, 86, 0.24)',
    shadow: 'red',
    border: '#ccc',
  },
  background: '#000',
  title: '#fff',
  stripedBackground: `url(${StripedBackgroundWhite})`,
  backgroundTable: 'RGB(124, 122, 122)',
};

export const lightTheme = {
  palette: {
    mode: 'light',
  },
  cardDrivers: {
    title: '#000',
    text: '#625F63',
    background: 'RGBA(204, 204, 204, 0.33)',
    border: 'red',
    shadow: '#ccc',
  },
  background: '#fff',
  title: '#000',
  stripedBackground: `url(${StripedBackground})`,
  backgroundTable: '#ccc',
};
