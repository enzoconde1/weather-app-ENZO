import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import React from "react";
import CiudadInfo from "../CiudadInfo/CiudadInfo";
import Clima from "../Clima/Clima";

const renderCiudadPais = (eventoCiudadPais) => (ciudadPais) => {
  const { ciudad, pais } = ciudadPais;

  return (
    <ListItem button key={ciudad} onClick={eventoCiudadPais}>
      <Grid container justify="center" allignItems="center">
        <Grid item md={9} xs={12}>
          <CiudadInfo ciudad={ciudad} pais={pais} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Clima temperatura={35} estado="soleado" />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const ListaCiudades = ({ ciudades, onClickCiudad }) => {
  return (
    <List>
      {ciudades.map((ciudadPais) =>
        renderCiudadPais(onClickCiudad)(ciudadPais)
      )}
    </List>
  );
};

ListaCiudades.propTypes = {
  ciudades: PropTypes.array.isRequired,
  onClickCiudad: PropTypes.func.isRequired,
};

export default ListaCiudades;
