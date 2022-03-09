import { render } from '@testing-library/react';
import React from 'react';
import Pronostico from './Pronostico';

const listaItemsPronostico = [ 
    { hora: 18, estado: "soleado", temperatura: 17, dia: "Jueves" },
    { hora: 6, estado: "nube", temperatura: 18, dia: "Viernes" },
    { hora: 12, estado: "niebla", temperatura: 18, dia: "Viernes" },
    { hora: 18, estado: "nublado", temperatura: 19, dia: "Viernes" },
    { hora: 14, estado: "lluvia", temperatura: 17, dia: "Sábado" },
    { hora: 15, estado: "lluvia", temperatura: 17, dia: "Sábado" }
]   

test("Pronostico render", async () => {
    
    const { findAllByTestId } = render(
        <Pronostico listaItemsPronostico={listaItemsPronostico} />
    )

    const pronosticoItems = await findAllByTestId('pronostico-item-container')

    expect(pronosticoItems).toHaveLength(6)
})