import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import ListaCiudades from './ListaCiudades';

const ciudades = [
  { ciudad: 'Buenos Aires', pais: 'Argentina' },
  { ciudad: 'Rio de Janeiro', pais: 'Brasil' },
  { ciudad: 'Madrid', pais: 'España' },
  { ciudad: 'Miami', pais: 'Estados Unidos' },
  { ciudad: 'Lisboa', pais: 'Portugal' },
];

test('ListaCiudades render', async () => {
  const { findAllByRole } = render(
    <ListaCiudades ciudades={ciudades} onClickCiudad={() => {}} />
  );

  const items = await findAllByRole('button');

  expect(items).toHaveLength(5);
});

test('Clima click', async () => {
  const fnClickOnItem = jest.fn();

  const { findAllByRole } = render(
    <ListaCiudades ciudades={ciudades} onClickCiudad={fnClickOnItem} />
  );

  const items = await findAllByRole('button');

  fireEvent.click(items[0]);

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
