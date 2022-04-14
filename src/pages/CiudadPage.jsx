import Grid from "@material-ui/core/Grid";
import React from "react";
import AppFrame from "../components/AppFrame/AppFrame";
/* import { Link } from "react-router-dom"; */
import CiudadInfo from "../components/CiudadInfo/CiudadInfo";
import Clima from "../components/Clima/Clima";
import ClimaDetalles from "../components/ClimaDetalles/ClimaDetalles";
import Pronostico from "../components/Pronostico/Pronostico";
import PronosticoGrafico from "../components/PronosticoGrafico/PronosticoGrafico";

const dataEx = [
  { diaHora: "Jue 18", min: 14, max: 22 },
  { diaHora: "Vie 06", min: 18, max: 27 },
  { diaHora: "Vie 12", min: 18, max: 28 },
  { diaHora: "Vie 18", min: 18, max: 25 },
  { diaHora: "Sab 06", min: 15, max: 22 },
  { diaHora: "Sab 12", min: 12, max: 19 },
];

const listaItemsPronosticoEx = [
  { hora: 18, estado: "soleado", temperatura: 17, dia: "Jueves" },
  { hora: 6, estado: "nube", temperatura: 18, dia: "Viernes" },
  { hora: 12, estado: "niebla", temperatura: 18, dia: "Viernes" },
  { hora: 18, estado: "nublado", temperatura: 19, dia: "Viernes" },
  { hora: 14, estado: "lluvia", temperatura: 17, dia: "Sábado" },
  { hora: 15, estado: "lluvia", temperatura: 17, dia: "Sábado" },
];

const CiudadPage = () => {
  const ciudad = "Buenos Aires";
  const pais = "Argentina";
  const estado = "soleado";
  const temperatura = 32;
  const humedad = 80;
  const viento = 5;
  const data = dataEx;
  const listaItemsPronostico = listaItemsPronosticoEx;

  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid item container justify="center" alignItems="flex-end" xs={12}>
          <CiudadInfo ciudad={ciudad} pais={pais} />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Clima estado={estado} temperatura={temperatura} />
          <ClimaDetalles humedad={humedad} viento={viento} />
        </Grid>
        <Grid item>
          <PronosticoGrafico data={data} />
        </Grid>
        <Grid item>
          <Pronostico listaItemsPronostico={listaItemsPronostico} />
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CiudadPage;
