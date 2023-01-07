import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

import { Header } from '../Header/Header'

describe('Pruebas del componente <Header />', () => {
    let headerElement;
    let urls;
    beforeEach(() => {
        render(<Header />);
        urls = screen.getAllByTestId('link-test');
        headerElement = screen.getByTestId('header-test');
    })

    test('Validar renderización de Navbar en la pagina', () => {
        expect(headerElement).toBeInTheDocument();
    })

    test('Validar los estilos del Navbar', () => {
        expect(headerElement).toHaveClass('PaginaPrincipal-Navbar')
    })


    test('Validar estilos de los links', () => {
        const a = screen.getAllByTestId('link-test');
        a.forEach(element => {
            expect(element).toHaveClass('PaginaPrincipal-Header-Enlace')
        });
    })

    test('Navegar hacia la seccion principal', () => {
        expect(urls[0].href).toContain("#QueEsLaPlataforma");
    })


    test('Navegar hacia la seccion Mision', () => {
        expect(urls[1].href).toContain("#Mision");
    })

    test('Navegar hacia la seccion Vision', () => {
        expect(urls[2].href).toContain("#Vision");
    })

    test('Navegar hacia la seccion AcercaDe', () => {
        expect(urls[3].href).toContain("#AcercaDe");
    })

})

