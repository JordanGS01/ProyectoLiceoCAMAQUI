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

    test('El botón de plataforma virtual redirecciona al login de esta', () => { 
        render(<Botones />);
        //TODO: BUSCAR COMO PROBAR CON LAS RUTAS ACTIVADAS
        //fireEvent.click(screen.getByText('Plataforma Virtual'));
        
        expect(true).toBeTruthy();
    })

    test('El botón de prematricula redirecciona al formulario de preatrícula', () => { 
        render(<Botones />);
        expect(true).toBeTruthy();
    })

})