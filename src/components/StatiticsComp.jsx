import React from "react";
import NavBarInicio from '../components/Navbars/NavBarInicio';
import "../style/style.css";

import {
  Principal,
  Estadisticas,
  H2,
  Row,
  ContainerEstadistica,
  Time,
  Text,
  Estadistica,
} from "../style/Statitics-styles";
import { Colors } from "../style/Colors";

const StatiticsComp = () => {

  let puntuacion = localStorage.getItem('puntos');

  return (
    <Principal>
      <Estadisticas>
        <H2>
          <h2>Premio</h2>
        </H2>

        <Row>
          <h3>Jugador</h3>
          <ContainerEstadistica>
            <Time color={Colors.Negro} />
            <Text>Dinero acumulado ($)</Text>
            <Estadistica>
              <Text>{puntuacion}</Text>
            </Estadistica>
          </ContainerEstadistica>
        </Row>
      </Estadisticas>
      <NavBarInicio/>
    </Principal>
  );
};

export default StatiticsComp;
