import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Clima from './Clima'; //SUT

test("Clima render", async () => {

    const { findByRole } = render(<Clima temperatura={35} estado='soleado' />)

    const temperaturaCmp = await findByRole("heading")

    expect(temperaturaCmp).toHaveTextContent('35')
})

