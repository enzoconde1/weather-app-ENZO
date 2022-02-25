import { render } from '@testing-library/react'
import React from 'react'
import ClimaDetalles from './ClimaDetalles'

// findByText: Permite encontrar un componente por el texto que muestra
test("ClimaDetalles render", async () => {
    const { findByText } = render(<ClimaDetalles viento={10} humedad={80} />)

    // Al utilizar las barras utilizamos un REGEXP, una expresión regular
    const viento = await findByText(/10/)
    const humedad = await findByText(/80/)

    expect(viento).toHaveTextContent("Viento: 10 km/h")
    expect(humedad).toHaveTextContent("Humedad: 80%")
})