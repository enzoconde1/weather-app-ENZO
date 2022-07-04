import React from 'react';
import PronosticoItem from './PronosticoItem';

export default {
  title: 'PronosticoItem',
  component: PronosticoItem,
};

export const LunesSoleado = () => {
  return (
    <PronosticoItem hora={10} estado="clear" temperatura={32} dia="lunes" />
  );
};
