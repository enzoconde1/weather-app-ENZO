import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import IconosEstados, { estadosValidos } from '../IconosEstados';

const Clima = ({ temperatura, estado}) => {
  return (
    <>
        <IconContext.Provider value={{ size:'5em'}}>
          <IconosEstados estado={estado} />
        </IconContext.Provider>
        <Typography display="inline" variant='h2'>{temperatura}º </Typography>
    </>
  )
};

Clima.propTypes = {
  temperatura: PropTypes.number.isRequired,
  estado: PropTypes.oneOf(estadosValidos).isRequired
};

export default Clima;
