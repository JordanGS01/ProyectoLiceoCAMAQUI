import { validarNombre, validarCedula, validarIgualdadContras, validarLargoContra } from '../registrarUsuario'

describe('Pruebas sobre las validaciones de los datos del usuario', () => { 

    test('Validacion del nombre, con nombre correcto', () => { 
        const nombreValido = 'Jordán Guzmán Salas';
        
        const resultado = validarNombre(nombreValido);
        expect(resultado).toBeTruthy();
    })

    test('Validacion del nombre, con nombre incorrecto', () => { 
        const nombreNoValido = 'Jordán Guzmá$n Salas1234';
        
        const resultado = validarNombre(nombreNoValido);
        expect(resultado).toBeFalsy();
    })

    test('Validacion de la cédula, con cédula correcta', () => { 
        const cedulaValida = 208140251;
        
        const resultado = validarCedula(cedulaValida);
        expect(resultado).toBeTruthy();
    })

    test('Validacion de la cédula, con cédula incorrecta', () => { 
        const cedulaValida = 20814025112324;
        
        const resultado = validarCedula(cedulaValida);
        expect(resultado).toBeFalsy();
    })

    test('Validacion de la contraseña, con contraseña correcta', () => { 
        const contraValida = 'MasDeSeisDigitosCon#$%#y12312'

        const resultado = validarLargoContra(contraValida);
        expect(resultado).toBeTruthy();
    })

    test('Validacion de la contraseña, con contraseña incorrecta', () => { 
        const contraValida = '-de6'

        const resultado = validarLargoContra(contraValida);
        expect(resultado).toBeFalsy();
    })

    test('Validacion de la contraseña de confirmación, con contraseñas iguales', () => { 
        const contra1 = 'asdasd'
        const contra2 = 'asdasd'
        
        const resultado = validarIgualdadContras(contra1,contra2);
        expect(resultado).toBeTruthy();
    })

    test('Validacion de la contraseña de confirmación, con contraseñas diferentes', () => { 
        const contra1 = 'LasContrasSon'
        const contra2 = 'Diferentes'
        
        const resultado = validarIgualdadContras(contra1,contra2);
        expect(resultado).toBeFalsy();
    })

})