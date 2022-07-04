import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import IconosEstados, { estadosValidos } from '../IconosEstados';

const Clima = ({ temperatura, estado }) => {
  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <IconContext.Provider value={{ size: '6em' }}>
        {estado ? (
          <IconosEstados estado={estado} />
        ) : (
          <Skeleton variant="circle" height={80} width={80}></Skeleton>
        )}
      </IconContext.Provider>
      {temperatura ? (
        <Typography display="inline" variant="h2">
          {temperatura}º
        </Typography>
      ) : (
        <Skeleton variant="rect" height={80} width={80}></Skeleton>
      )}
    </Grid>
  );
};

Clima.propTypes = {
  temperatura: PropTypes.number,
  estado: PropTypes.oneOf(estadosValidos),
};

export default Clima;
