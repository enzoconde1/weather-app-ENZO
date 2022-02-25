import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import ListaCiudades from './ListaCiudades'; //SUT

const ciudades = [
    { ciudad: 'Buenos Aires', pais: 'Argentina'},
    { ciudad: 'Rio de Janeiro', pais: 'Brasil'},
    { ciudad: 'Madrid', pais: 'España'},
    { ciudad: 'Miami', pais: 'Estados Unidos'},
    { ciudad: 'Lisboa', pais: 'Portugal'}
]

test("ListaCiudades render", async () => {
    
    const { findAllByRole } = render(<ListaCiudades ciudades={ciudades} />)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(5)
})

test("Clima click", async () => {

    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<ListaCiudades ciudades={ciudades} onClickCiudad={fnClickOnItem} />)

    const items = await findAllByRole('listitem')

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})