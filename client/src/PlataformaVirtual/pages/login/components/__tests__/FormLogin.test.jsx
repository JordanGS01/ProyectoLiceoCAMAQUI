

import { cleanup, render, screen, fireEvent } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom' 

import { UserContext } from '../../../../context/UserContext'

import { FormLogin } from '../FormLogin/FormLogin'


describe('Pruebas sobre el componente <FormLogin />', () => { 
    
    let containerFormLogin;

    beforeEach(() => {
        const userData = {};
        const setUser = () => {};
        const logOutUser = () => {};
        const loged = false;
        const isStudent = () => {};
        const isProfessor = () => {};
        const isAdmin = () => {};

        const { container } = render(
            <BrowserRouter>
                <UserContext.Provider value={{ 
                    userData, setUser, logOutUser,
                    loged, isStudent, isProfessor,
                    isAdmin
                }}>
                    <FormLogin />
                </UserContext.Provider>
            </BrowserRouter>
        );

        containerFormLogin = container;
    })

    
    test('Debe hacer match con el snapshot', () => {
        expect( containerFormLogin ).toMatchSnapshot();
    })

    test('El valor del input cedula debe cambiar', () => { 
        const cedula = 208140251;

        const inputCedula = screen.getByRole('spinbutton', { name: 'Número de cédula' });
        expect(inputCedula.value).toEqual('');
        fireEvent.input(inputCedula, { target: { value: cedula } });
        expect(inputCedula.value).toEqual(`${cedula}`);
    })

    test('El valor del input contraseña debe cambiar', () => { 
        const contra = "contraSegura";

        const botonVisibilidad = screen.getByRole('button', { name: 'toggle password visibility' });
        fireEvent.click(botonVisibilidad);
        
        const inputContra = screen.getByRole('textbox', { name: 'Contraseña' });
        expect(inputContra.value).toEqual('');
        fireEvent.input(inputContra, { target: { value: contra } });
        expect(inputContra.value).toEqual(`${contra}`);
    })

    test('La contraseña debe ser visible al dar click en el botón de visibilidad', () => { 
        const botonVisibilidad = screen.getByRole('button', { name: 'toggle password visibility' });
        
        fireEvent.click(botonVisibilidad);
        expect(screen.getByRole('textbox', { name: 'Contraseña' })).toBeTruthy();
    })


    afterEach(() => {
        cleanup();
    })

})