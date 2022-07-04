import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import IconosEstados, { estadosValidos } from '../IconosEstados';

const PronosticoItem = ({ dia, hora, estado, temperatura }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography>{dia}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hora}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={{ size: '5em' }}>
          <IconosEstados estado={estado} />
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperatura}º</Typography>
      </Grid>
    </Grid>
  );
};

PronosticoItem.propTypes = {
  dia: PropTypes.string.isRequired,
  hora: PropTypes.number.isRequired,
  estado: PropTypes.oneOf(estadosValidos).isRequired,
  temperatura: PropTypes.number.isRequired,
};

export default PronosticoItem;
