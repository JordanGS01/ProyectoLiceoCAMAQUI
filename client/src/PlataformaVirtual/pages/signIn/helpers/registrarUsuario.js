

import axios from "axios";

// Se encarga de validar, mediante expresiones regulares, que el nombre del usuario cumpla los requisitos
const validarNombre = ( nombre ) => {
    
    const nombreValidoRegex = /^[a-zA-Z\S*\s]+$/;
    const nombreSinNumerosRegex = /^([^0-9]*)$/;
    const nombreConSimbolosRegex = /[.*@#+\-?^${}()|[\]\\]/;
    
    const nombreValido = nombreValidoRegex.test(nombre);
    const nombreConNumeros = !nombreSinNumerosRegex.test(nombre);
    const nombreConSimbolos = nombreConSimbolosRegex.test(nombre);

    if(nombreConNumeros || !nombreValido || nombreConSimbolos){
        return false;
    }
    return true;

}

// Se encarga de validar, mediante expresiones regulares, que la cedula del usuario cumpla los requisitos
const validarCedula = ( cedula ) => {
    
    const cedulaValidaRegex = /^[1-9][0-9]{8}$/;

    const cedulaValida = cedulaValidaRegex.test(cedula);
    
    if(!cedulaValida){
        return false;
    }
    return true;

}

// Se valida el largo de la contraseña
const validarLargoContra = ( contra ) => {

    const contraValidaRegex = /^[a-zA-Z\S*\s]{6,30}$/;

    const contraValida = contraValidaRegex.test(contra);
    
    if(!contraValida){
        return false;
    }
    return true;

}

// Se valida la confirmación de contraseña
const validarIgualdadContras = ( contra, repContra ) => {
    
    if ( contra !== repContra ) {
        return false;
    }
    return true;

}

/*
Función que utiliza expresiones regulares para validar los datos del formulario.
Si algún dato no es correcto, se le notifica al usuario
*/
const validarDatos = ( nombre, cedula, contra, repContra, setWarnings ) => {

    const nombreValido = validarNombre( nombre );
    const cedulaValida = validarCedula( cedula );
    const contraValida = validarLargoContra( contra );
    const contrasIguales = validarIgualdadContras( contra, repContra );

    const warnings = {
        nombreInvalido: !nombreValido,
        cedulaInvalida: !cedulaValida,
        contraInvalida: !contraValida,
        contraNoCoincide: !contrasIguales
    }
    setWarnings( warnings )

    return nombreValido && cedulaValida && contraValida && contrasIguales;

}

const registrarUsuario = ( nombre, cedula, contra, setOpenSuccessAlert, setOpenErrorAlert ) => {
    axios.post('http://localhost:3300/users', {
        cedula,
        nombre,
        tipo: 'E',
        contra
    }).then(( response ) => {
        setOpenSuccessAlert(true);
        console.log( response );
    }, ( error ) => {
        setOpenErrorAlert(true);
        console.log( error );
    })
}

export const onFormSubmit = ( e, { nombre, cedula, contra, repContra }, setWarnings, setOpenSuccessAlert, setOpenErrorAlert ) => {
    
    e.preventDefault();
    
    const noHayErrores = validarDatos(nombre, cedula, contra, repContra, setWarnings);

    if ( noHayErrores ) {
        registrarUsuario( nombre, cedula, contra, setOpenSuccessAlert, setOpenErrorAlert );
    }
}

