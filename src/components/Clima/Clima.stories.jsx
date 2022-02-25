import React from 'react';
import 'typeface-roboto';
import Clima from './Clima';

export default {
    title: "Clima",
    component: Clima
}

export const ClimaSoleado = () => (<Clima temperatura={35} estado='soleado' />)