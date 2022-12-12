import React from 'react';
import { Nav, Card, Link } from './homeStyle';

function Home() {
  return (
    <Nav>
      <Card>
        <Link to="pilotos" className="pilot">
          <div>
            <h1>Pilotos</h1>
            <p>
              Veja a lista de todos os pilotos que ja passaram pela Fórmula 1 e,
              informações sobre cada um deles.
            </p>
          </div>
        </Link>
      </Card>
      <Card>
        <Link to="circuitos" className="circuito">
          <div>
            <h1>Circuitos</h1>
            <p>
              Circuitos que ja fizeram e fazem parte do calendario de corridas
              da Fórmula 1.
            </p>
          </div>
        </Link>
      </Card>
      <Card>
        <Link to="equipes" className="team">
          <div>
            <h1>Equipes</h1>
            <p>Conheça todas as equipes que ja participaram da Fórmula 1.</p>
          </div>
        </Link>
      </Card>
      <Card>
        <Link to="rankings" className="ranking">
          <div>
            <h1>Rankings</h1>
            <p>
              Todos os campeões mundiais, equipes vencedoras do campeonato de
              construtores e, ranking do grid atual.
            </p>
          </div>
        </Link>
      </Card>
    </Nav>
  );
}

export default Home;
