import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Informacion } from '../Informacion/Informacion'


describe('Pruebas del componente <Informacion />', () => { 
    
    let InfoElement;

    beforeEach(() => {
        render(<Informacion />);
        InfoElement = screen.getByTestId('informacion-test');
    })

    test('Validar renderización de Informacion en la pagina', () => {
        expect(InfoElement).toBeInTheDocument();
    })

 })