import React from 'react'
import ClimaDetalles from './ClimaDetalles'

export default {
    title: "ClimaDetalles",
    component: ClimaDetalles
}

export const WeatherDetailsExample = () => {
    return <ClimaDetalles humedad={10} viento={9} />
}