import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import imgCircuit from '../../assets/img/circuit.jpg';
import imgPilot from '../../assets/img/pilot.jpg';
import imgTeam from '../../assets/img/team.jpg';
import imgRanking from '../../assets/img/ranking.jpg';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Card = styled.section`
  width: 300px;
  height: 500px;
  margin: 10px;
  padding: 10px;
  border-top-right-radius: 15px;
  box-shadow: 2px -2px 0px 0.5px rgba(255, 0, 0, 0.93);
`;

export const Link = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  border-top-right-radius: 15px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &.circuito {
    background-image: url(${imgCircuit});
  }
  &.pilot {
    background-image: url(${imgPilot});
  }
  &.team {
    background-image: url(${imgTeam});
  }
  &.ranking {
    background-image: url(${imgRanking});
  }

  div {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 10px;
    border-top-right-radius: 15px;
    background-color: rgba(58, 53, 50, 0.4);
    backdrop-filter: blur(4px);
    transition: 1s linear;
    h1 {
      font-size: 30px;
      letter-spacing: 3px;
      padding: 5px;
      margin-bottom: 10px;
      transition: 1s linear;
    }
  }

  &:hover {
    animation: cards-animation 0.3s both;
    div {
      animation: background-animation 0.5s both;
    }
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

  @keyframes background-animation {
    to {
      backdrop-filter: blur(1px);
    }
  }
`;
