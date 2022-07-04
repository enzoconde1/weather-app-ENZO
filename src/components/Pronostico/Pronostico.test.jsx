import { render } from '@testing-library/react';
import React from 'react';
import Pronostico from './Pronostico';

const listaItemsPronostico = [
  { hora: 18, estado: 'clear', temperatura: 17, dia: 'Jueves' },
  { hora: 6, estado: 'clouds', temperatura: 18, dia: 'Viernes' },
  { hora: 12, estado: 'drizzle', temperatura: 18, dia: 'Viernes' },
  { hora: 18, estado: 'clouds', temperatura: 19, dia: 'Viernes' },
  { hora: 14, estado: 'rain', temperatura: 17, dia: 'Sábado' },
  { hora: 15, estado: 'rain', temperatura: 17, dia: 'Sábado' },
];

test('Pronostico render', async () => {
  const { findAllByTestId } = render(
    <Pronostico listaItemsPronostico={listaItemsPronostico} />
  );

  const pronosticoItems = await findAllByTestId('pronostico-item-container');

  expect(pronosticoItems).toHaveLength(6);
});
