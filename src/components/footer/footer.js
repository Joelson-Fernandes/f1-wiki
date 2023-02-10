import React from 'react';
import styled from 'styled-components';
import GitLogo from '../../assets/logo/gitIcon.png';
import MailLogo from '../../assets/logo/mailIcon.png';
import InternetLogo from '../../assets/logo/internet.png';

function Footer() {
  return (
    <Container>
      <div>
        <Title>WIKI</Title>
      </div>
      <div>
        <Icons>
          <a href="https://github.com/Joelson-Fernandes/f1-wiki">
            <img src={GitLogo} width={36} alt="Logotipo github" />
          </a>
          <a href="mailto:contato@joelsonfernandes.com.br">
            <img src={MailLogo} width={36} alt="Logotipo email" />
          </a>
          <a href="https://joelsonfernandes.com.br">
            <img src={InternetLogo} width={36} alt="Logotipo internet" />
          </a>
        </Icons>
        <a href="https://www.mediawiki.org/wiki/API:Main_page/pt-br">
          MediaWiki
        </a>
        <a href="http://ergast.com/mrd/">Ergast API</a>
        <p>©2023 - F1Wiki</p>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid red;
  border-left: 2px solid red;
  border-top-left-radius: 15px;
  width: 95%;
  padding: 15px;
  margin: 0 auto 15px auto;
  color: ${(props) => props.theme.title};

  a {
    color: ${(props) => props.theme.title};
    &:hover {
      color: red;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: end;
    word-wrap: break-word;
  }

  @media (max-width: 750px) {
    div {
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Faster One', cursive;
  color: red;
  font-size: 55px;
  margin-left: 20px;
`;

const Icons = styled.span`
  display: flex;
  justify-content: end;
  a {
    margin-left: 3px;
  }
  @media (max-width: 750px) {
    justify-content: center;
  }
`;
