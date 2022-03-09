import { render } from '@testing-library/react';
import React from 'react';
import CiudadInfo from './CiudadInfo';

test("CiudadInfo render", async () => {
    const ciudad = "Buenos Aires"
    const pais = "Argentina"

    const { findAllByRole } = render(<CiudadInfo ciudad={ciudad} pais={pais} />)

    const ciudadPaisCmp = await findAllByRole("heading")

    expect(ciudadPaisCmp[0]).toHaveTextContent(ciudad)
    expect(ciudadPaisCmp[1]).toHaveTextContent(pais)
})