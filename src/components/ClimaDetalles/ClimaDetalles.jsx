import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

const ClimaDetalles = ({ humedad, viento }) => {
    return (
        <>
            <Typography>Humedad: {humedad}%</Typography>
            <Typography>Viento: {viento} km/h</Typography>
        </>
    )
}

ClimaDetalles.propTypes = {
    humedad: PropTypes.number.isRequired,
    viento: PropTypes.number.isRequired,
}

export default ClimaDetalles