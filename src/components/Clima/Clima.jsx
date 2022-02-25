import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { IconContext } from 'react-icons';
import { WiCloud, WiCloudy, WiDaySunny, WiFog, WiRain } from 'react-icons/wi';

const estadosValidos = [
  'nube',
  'nublado',
  'niebla',
  'soleado',
  'lluvia'
]

const estadoSegunNombre = {
  nube: WiCloud,
  nublado: WiCloudy,
  niebla: WiFog,
  soleado: WiDaySunny,
  lluvia: WiRain
}

const renderEstado = estado => {
    const Icono = estadoSegunNombre[estado]
    return <Icono />
}

const Clima = ({ temperatura, estado}) => {
  return (
    <>
        <IconContext.Provider value={{ size:'5em'}}>
          { renderEstado(estado) }
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
