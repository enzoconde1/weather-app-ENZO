import React from 'react';
import 'typeface-roboto';
import CiudadInfo from './CiudadInfo';

export default {
    title: "CiudadInfo",
    component: CiudadInfo
}

export const Ciudad = () => (<CiudadInfo ciudad={"Buenos Aires"} pais={'Argentina'}/>)