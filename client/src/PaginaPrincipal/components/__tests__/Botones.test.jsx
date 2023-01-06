import { render, screen, fireEvent } from '@testing-library/react'

import { Botones } from '../BotonesPrincipales/Botones'

import { BrowserRouter } from 'react-router-dom';

describe('Pruebas del componente <Botones />', () => { 
    
    test('Renderiza el botón de prematrícula correctamente', () => { 
        render(
            <BrowserRouter>
                <Botones />
            </BrowserRouter>
        );

        expect(screen.getByText('Prematricula en línea').innerHTML).toContain('Prematricula en línea');
     })

    test('Renderiza el botón de plataforma virtual correctamente', () => { 
        render(
            <BrowserRouter>
                <Botones />
            </BrowserRouter>
        );
        expect(screen.getByText('Plataforma Virtual').innerHTML).toContain('Plataforma Virtual');
    })

})