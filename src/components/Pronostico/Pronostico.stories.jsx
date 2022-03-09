import React from 'react'
import Pronostico from './Pronostico'

export default {
    title: "Pronostico",
    component: Pronostico
}

const listaItemsPronostico = [ 
    { hora: 18, estado: "soleado", temperatura: 17, dia: "Jueves" },
    { hora: 6, estado: "nube", temperatura: 18, dia: "Viernes" },
    { hora: 12, estado: "niebla", temperatura: 18, dia: "Viernes" },
    { hora: 18, estado: "nublado", temperatura: 19, dia: "Viernes" },
    { hora: 14, estado: "lluvia", temperatura: 17, dia: "Sábado" },
    { hora: 15, estado: "lluvia", temperatura: 17, dia: "Sábado" }
]    

export const PronosticoExp = () => (
    <Pronostico listaItemsPronostico={listaItemsPronostico} />
)