import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import CiudadInfo from '../CiudadInfo/CiudadInfo';
import Clima from '../Clima/Clima';

const renderCiudadPais = eventoCiudadPais => ciudadPais => {
  const { ciudad, pais } = ciudadPais

  return (
    <li key={ciudad} onClick={eventoCiudadPais}> 
      <Grid container
        justify='center'
        allignItems='center'
      >
        <Grid item 
          md={8}
          xs={12}>
            <CiudadInfo ciudad={ciudad} pais={pais} />
        </Grid>
        <Grid item 
          md={4}
          xs={12}>
            <Clima temperatura={35} estado='soleado' />
        </Grid>
      </Grid>
    </li>
    )
}

const ListaCiudades = ({ ciudades, onClickCiudad }) => {
  return (
    <ul>
      {
        ciudades.map(ciudadPais => renderCiudadPais(onClickCiudad)(ciudadPais))
      }
    </ul>
  )
};

ListaCiudades.propTypes = {
  ciudades: PropTypes.array.isRequired,
  onClickCiudad: PropTypes.func.isRequired
};

export default ListaCiudades;
