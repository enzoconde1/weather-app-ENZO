import React from 'react'
import PronosticoGrafico from './PronosticoGrafico'

export default {
    title: 'PronosticoGrafico',
    component: PronosticoGrafico
}

const data = [
    { 'diaHora': "Jue 18", 'min': 14, 'max': 22, },
    { 'diaHora': "Vie 06", 'min': 18, 'max': 27, },
    { 'diaHora': "Vie 12", 'min': 18, 'max': 28, },
    { 'diaHora': "Vie 18", 'min': 18, 'max': 25, },
    { 'diaHora': "Sab 06", 'min': 15, 'max': 22, },
    { 'diaHora': "Sab 12", 'min': 12, 'max': 19, }
]

export const PronosticoGraficoExp = () => (
    <PronosticoGrafico data={data} />
)