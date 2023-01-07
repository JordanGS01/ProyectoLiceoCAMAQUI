import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import { NoticiaPrincipal } from '../NoticiaPrincipal/NoticiaPrincipal'


describe('Pruebas del componente <NoticiaPrincipal />', () => {
    let PrincipalElement;
    let ParrafoElement;

    beforeEach(() => {
        render(<NoticiaPrincipal />);
        PrincipalElement = screen.getByTestId('principal-test');
        ParrafoElement = screen.getAllByTestId('textoPrincipal-test');
    })


    test('Validar renderización de NoticiaPrincipal en la pagina', () => {
        expect(PrincipalElement).toBeInTheDocument();
    })


    test('Validar los estilos del titulo principal', () => {
        expect(ParrafoElement[0]).toHaveClass('PaginaPrincipal-Noticia-Texto')
    })

    test('Validar los estilos de la imagen principal', () => {
        expect(ParrafoElement[1]).toHaveClass('PaginaPrincipal-Noticia-Cancha')
    })
    test('Validar los estilos del parrafo principal', () => {
        expect(ParrafoElement[2]).toHaveClass('PaginaPrincipal-Noticia-Texto')
    })

})