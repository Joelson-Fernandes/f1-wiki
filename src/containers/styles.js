import styled from 'styled-components';
import Box from '@mui/material/Box';

export const Container = styled.section`
  width: 95%;
  margin: 0px auto;
  border-top: 2px solid red;
  border-bottom: 2px solid red;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 2px solid red;
  padding: 14px;
  color: ${(props) => props.theme.title};
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;

  // nav paginação
  nav {
    display: flex;
    justify-content: center;
    width: 95%;
    padding: 15px 0;

    button {
      &.MuiPaginationItem-root {
        color: ${(props) => props.theme.title};
        border: 2px solid red;

        &:hover {
          color: #fff;
          background-color: red;
          border: 2px solid ${(props) => props.theme.background};
        }
      }
      &.Mui-selected {
        color: #fff;
        background-color: red;
      }
    }

    div {
      color: ${(props) => props.theme.title};
    }
  }
`;

// Cards
export const Button = styled.button`
  width: 420px;
  padding: 2px;
  margin: 8px;
  border: none;
  background-color: transparent;
  text-align: start;
  cursor: pointer;
  border-radius: 0px 15px 0px 15px;
  -webkit-box-shadow: -7px 7px 0px -4px ${(props) => props.theme.cardDrivers.shadow};
  -moz-box-shadow: -7px 7px 0px -4px ${(props) => props.theme.cardDrivers.shadow};
  box-shadow: -7px 7px 0px -4px ${(props) => props.theme.cardDrivers.shadow};
`;

export const Card = styled.fieldset`
  display: flex;
  height: 100%;
  padding: 15px;
  color: ${(props) => props.theme.cardDrivers.text};
  border: 3px solid ${(props) => props.theme.cardDrivers.border};
  border-radius: 0px 15px 0px 15px;
  background-color: ${(props) => props.theme.cardDrivers.background};
  position: relative;
  transition: 0.1s linear;

  h1 {
    color: ${(props) => props.theme.cardDrivers.title};
  }

  &:hover {
    animation: cards-animation 0.5s both;
  }

  @keyframes cards-animation {
    from {
      top: 0px;
      right: 0px;
    }
    to {
      top: -5px;
      right: -5px;
    }
  }
`;

export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  p,
  a {
    margin: 5px;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.title};
    width: 100px;

    &:hover {
      color: ${(props) => props.theme.cardDrivers.border};
    }
  }
`;

export const Photo = styled.div`
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

export const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
