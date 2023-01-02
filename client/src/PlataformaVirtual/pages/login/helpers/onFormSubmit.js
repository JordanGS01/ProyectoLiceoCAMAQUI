

import { loginUser } from "./loginUser";


export const onFormSubmit = async (e, { cedula, contra }, setUser, navigate) => {

    e.preventDefault();
    const logedIn = await loginUser( cedula, contra, setUser );
    //FALTA REDIRECCIONAR DESDE EL OTRO SISTEMA
    if ( !logedIn ) {
        console.log('La cuenta no existe')
        //Se muestra el alert
    }
}