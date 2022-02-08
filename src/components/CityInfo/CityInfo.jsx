import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const CityInfo = ({ city, country}) => {
  return (
    <>
        <Typography display="inline" variant='h4'>{city}, </Typography>
        <Typography display="inline" variant='h6'>{country}</Typography>
    </>
  )
};

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
};

export default CityInfo;
