import PropTypes from 'prop-types';
import React from 'react';
import { WiCloud, WiCloudy, WiDaySunny, WiFog, WiRain } from 'react-icons/wi';

export const estadosValidos = [
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

const IconosEstados = ({estado}) => {
    const EstadoSegunNombre = estadoSegunNombre[estado]
    return (
        <EstadoSegunNombre/>
    )
}

IconosEstados.propTypes = {
  estado: PropTypes.oneOf(estadosValidos).isRequired
}

export default IconosEstados