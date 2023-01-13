import { render, screen, fireEvent } from '@testing-library/react'

import { MenuInicial } from '../../MenuInicial'

import { UserProvider } from '../../../../context/UserProvider'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PlataformaVirtualRouter } from '../../../../router/PlataformaVirtualRouter'

describe('Pruebas del componente <menuInicial/>', () => {

  test('Renderiza el componente menuInicial correctamente Profesor', () => {
    render(<UserProvider>
      <BrowserRouter>
        <PlataformaVirtualRouter>
          <MenuInicial />
        </PlataformaVirtualRouter>
      </BrowserRouter>
    </UserProvider>);
    expect(screen.getByText('Ingresar').innerHTML).toContain('Ingresar');
  })

  test('Renderiza el componente menuInicial correctamente Estudiante', () => {
    render(<UserProvider>
      <BrowserRouter>
        <PlataformaVirtualRouter>
          <MenuInicial />
        </PlataformaVirtualRouter>
      </BrowserRouter>
    </UserProvider>);
    expect(screen.getByText('Ingresar').innerHTML).toContain('Ingresar');
  })


})