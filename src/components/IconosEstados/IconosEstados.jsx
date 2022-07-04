import PropTypes from 'prop-types';
import React from 'react';
import {
  WiDayCloudy,
  WiDaySunny,
  WiRain,
  WiRaindrop,
  WiSnow,
  WiThunderstorm,
} from 'react-icons/wi';

export const estadosValidos = [
  'clouds',
  'clear',
  'rain',
  'snow',
  'drizzle',
  'thunderstorm',
];

const estadoSegunNombre = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm,
};

const IconosEstados = ({ estado }) => {
  const EstadoSegunNombre = estadoSegunNombre[estado];
  return <EstadoSegunNombre />;
};

IconosEstados.propTypes = {
  estado: PropTypes.oneOf(estadosValidos).isRequired,
};

export default IconosEstados;
