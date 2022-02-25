import { action } from '@storybook/addon-actions';
import React from 'react';
import ListaCiudades from './ListaCiudades';

export default {
    title: "ListaCiudades",
    component: ListaCiudades
}

const ciudades = [
    { ciudad: 'Buenos Aires', pais: 'Argentina'},
    { ciudad: 'Rio de Janeiro', pais: 'Brasil'},
    { ciudad: 'Madrid', pais: 'España'},
    { ciudad: 'Miami', pais: 'Estados Unidos'},
    { ciudad: 'Lisboa', pais: 'Portugal'}
]

export const Lista = () => <ListaCiudades ciudades={ciudades} onClickCiudad={action('Click en una ciudad')} />