import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const CiudadInfo = ({ ciudad, pais}) => {
  return (
    <>
        <Typography display="inline" variant='h4'>{ciudad}, </Typography>
        <Typography display="inline" variant='h6'>{pais}</Typography>
    </>
  )
};

CiudadInfo.propTypes = {
    ciudad: PropTypes.string.isRequired,
    pais: PropTypes.string.isRequired
};

export default CiudadInfo;
