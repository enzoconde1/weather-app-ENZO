import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import convertUnits from 'convert-units';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CiudadInfo from '../CiudadInfo/CiudadInfo';
import Clima from '../Clima/Clima';

const getCiudadCodigo = (ciudad, codigoPais) => `${ciudad}-${codigoPais}`;

const renderCiudadPais = (eventoCiudadPais) => (ciudadPais, clima) => {
  const { ciudad, codigoPais, pais } = ciudadPais;

  return (
    <ListItem
      button
      key={getCiudadCodigo(ciudad, codigoPais)}
      onClick={eventoCiudadPais}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={9} xs={12}>
          <CiudadInfo ciudad={ciudad} pais={pais} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Clima
            temperatura={clima && clima.temperatura}
            estado={clima && clima.estado}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const ListaCiudades = ({ ciudades, onClickCiudad }) => {
  const [allClima, setAllClima] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (ciudad, codigoPais) => {
      try {
        const appId = '';
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},,${codigoPais}&appid=${appId}`;

        const responseGeo = await axios.get(geoUrl);
        const dataGeo = responseGeo.data;
        const latitud = dataGeo[0].lat;
        const longitud = dataGeo[0].lon;

        const dataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${appId}`;

        const responseData = await axios.get(dataUrl);
        const { data } = responseData;

        const temperaturaKelvin = convertUnits(data.main.temp)
          .from('K')
          .to('C')
          .toFixed(0);
        const temperatura = Number(temperaturaKelvin);
        const estado = data.weather[0].main.toLowerCase();

        const propName = getCiudadCodigo(ciudad, codigoPais);
        const propValue = { temperatura, estado };

        setAllClima((allClima) => {
          const result = { ...allClima, [propName]: propValue };
          return result;
        });
      } catch (error) {
        if (error.response) {
          setError('Ha ocurrido un error en el servidor del clima');
        } else if (error.request) {
          setError('Verifique la conexion a internet');
        } else {
          setError('Error al cargar los datos');
        }
      }
    };
    ciudades.forEach(({ ciudad, codigoPais }) => {
      setWeather(ciudad, codigoPais);
    });
  }, [ciudades]);

  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {ciudades.map((ciudadPais) =>
          renderCiudadPais(onClickCiudad)(
            ciudadPais,
            allClima[getCiudadCodigo(ciudadPais.ciudad, ciudadPais.codigoPais)]
          )
        )}
      </List>
    </div>
  );
};

ListaCiudades.propTypes = {
  ciudades: PropTypes.arrayOf(
    PropTypes.shape({
      ciudad: PropTypes.string.isRequired,
      pais: PropTypes.string.isRequired,
      codigoPais: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCiudad: PropTypes.func.isRequired,
};

export default ListaCiudades;
