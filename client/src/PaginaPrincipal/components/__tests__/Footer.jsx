import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import {Footer} from '../Footer/Footer'



describe('Pruebas del componente <Footer /> ', () => { 
    let footerElement;
    beforeEach(() => {
        render( <Footer />);
        footerElement = screen.getByTestId('footer-test');
    })

    test('Validar renderización del footer en la pagina', () => {
        expect(footerElement).toBeInTheDocument();
    })
 })