import { render } from '@testing-library/react'
import React from 'react'
import ClimaDetalles from './ClimaDetalles'

test("ClimaDetalles render", async () => {
    const { findByText } = render(<ClimaDetalles viento={10} humedad={80} />)

    const viento = await findByText(/10/)
    const humedad = await findByText(/80/)

    expect(viento).toHaveTextContent("Viento: 10 km/h")
    expect(humedad).toHaveTextContent("Humedad: 80%")
})