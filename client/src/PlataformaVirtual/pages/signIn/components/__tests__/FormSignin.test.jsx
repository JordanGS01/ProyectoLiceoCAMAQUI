

import { cleanup, render, screen, fireEvent } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom' 

import { UserContext } from '../../../../context/UserContext'

import { FormSignin } from '../FormSignIn/FormSignin'


describe('Pruebas sobre el componente <FormLogin />', () => { 
    
    let containerFormSignIn;

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
                    <FormSignin />
                </UserContext.Provider>
            </BrowserRouter>
        );

        containerFormSignIn = container;
    })

    
    test('Debe hacer match con el snapshot', () => {
        expect( containerFormSignIn ).toMatchSnapshot();
    })

    test('El valor del input nombre completo debe cambiar', () => { 
        const nombre = 'Jordán Guzmán Salas';

        const inputNombre = screen.getByRole('textbox', { name: 'Nombre completo' });
        expect(inputNombre.value).toEqual('');
        fireEvent.input(inputNombre, { target: { value: nombre } });
        expect(inputNombre.value).toEqual(`${nombre}`);
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

        const botonVisibilidad = screen.getAllByRole('button', { name: 'toggle password visibility' })[0];
        fireEvent.click(botonVisibilidad);
        
        const inputContra = screen.getByRole('textbox', { name: 'Contraseña' });
        expect(inputContra.value).toEqual('');
        fireEvent.input(inputContra, { target: { value: contra } });
        expect(inputContra.value).toEqual(`${contra}`);
    })

    test('El valor del input repContra debe cambiar', () => { 
        const contra = "contraSegura";

        const botonVisibilidad = screen.getAllByRole('button', { name: 'toggle password visibility' })[0];
        fireEvent.click(botonVisibilidad);
        
        const inputContra = screen.getByRole('textbox', { name: 'Vuelva a ingresar la contraseña' });
        expect(inputContra.value).toEqual('');
        fireEvent.input(inputContra, { target: { value: contra } });
        expect(inputContra.value).toEqual(`${contra}`);
    })

    test('La contraseña debe ser visible al dar click en el botón de visibilidad', () => { 
        const botonVisibilidad = screen.getAllByRole('button', { name: 'toggle password visibility' })[0];
        
        fireEvent.click(botonVisibilidad);
        expect(screen.getByRole('textbox', { name: 'Contraseña' })).toBeTruthy();
    })

    test('Al ingresar mal el nombre, la cedula, contraseña y la repContra, debe informarse al usuario', () => { 
        const nombre = 'Jordán123213';
        const cedula = 2081402222;
        const contra = 'asdqw'
        const repContra = 'asdasd'

        const inputNombre = screen.getByRole('textbox', { name: 'Nombre completo' });
        fireEvent.input(inputNombre, { target: { value: nombre } });

        const inputCedula = screen.getByRole('spinbutton', { name: 'Número de cédula' });
        fireEvent.input(inputCedula, { target: { value: cedula } });

        const botonVisibilidad = screen.getAllByRole('button', { name: 'toggle password visibility' })[0];
        fireEvent.click(botonVisibilidad);
        
        const inputContra = screen.getByRole('textbox', { name: 'Contraseña' });
        fireEvent.input(inputContra, { target: { value: contra } });

        const inputRepContra = screen.getByRole('textbox', { name: 'Vuelva a ingresar la contraseña' });
        fireEvent.input(inputRepContra, { target: { value: repContra } });

        const botonRegistrarse = screen.getByRole('button', {name: 'Registrarse'});
        fireEvent.click(botonRegistrarse);

        expect(screen.getByText('El nombre no debe contener números o símbolos')).toBeTruthy();
        expect(screen.getByText('La cédula debe conener 9 dígitos')).toBeTruthy();
        expect(screen.getByText('La contraseña debe ser de mínimo 6 dígitos')).toBeTruthy();
        expect(screen.getByText('Las contraseñas no coinciden')).toBeTruthy();
    })

    test('El botón "Regresar" redirecciona al Login', () => { 
        const botonRegresar = screen.getByRole('button', { name: 'Regresar' });

        expect(fireEvent.click(botonRegresar)).toBeTruthy();
    })


    afterEach(() => {
        cleanup();
    })

})