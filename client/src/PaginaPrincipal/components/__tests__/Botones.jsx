import { render, screen, fireEvent } from '@testing-library/react'

import { Botones } from '../BotonesPrincipales/Botones'


describe('Pruebas del componente <Botones />', () => {
    test('Renderiza el botón de prematrícula correctamente', () => {
        render(<Botones />);
        expect(screen.getByText('Prematricula en línea').innerHTML).toContain('Prematricula en línea');
    })
    test('Renderiza el botón de plataforma virtual correctamente', () => {
        render(<Botones />);
        expect(screen.getByText('Plataforma Virtual').innerHTML).toContain('Plataforma Virtual');
    })
})