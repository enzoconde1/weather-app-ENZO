import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { estadosValidos } from '../IconosEstados';
import PronosticoItem from '../PronosticoItem/PronosticoItem';

const renderPronosticoItem = (pronostico) => {
  const { dia, hora, estado, temperatura } = pronostico;
  return (
    <Grid data-testid="pronostico-item-container" item key={`${dia}${hora}`}>
      <PronosticoItem
        hora={hora}
        dia={dia}
        estado={estado}
        temperatura={temperatura}
      ></PronosticoItem>
    </Grid>
  );
};

const Pronostico = ({ listaItemsPronostico }) => {
  return (
    <Grid container justifyContent="space-around" alignItems="center">
      {listaItemsPronostico.map((pronostico) =>
        renderPronosticoItem(pronostico)
      )}
    </Grid>
  );
};

Pronostico.propTypes = {
  listaItemsPronostico: PropTypes.shape({
    hora: PropTypes.number.isRequired,
    estado: PropTypes.oneOf(estadosValidos).isRequired,
    temperatura: PropTypes.number.isRequired,
    dia: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pronostico;
