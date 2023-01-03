

import { loginUser } from "./loginUser";


export const onFormSubmit = async (e, { cedula, contra }, setUser, setOpenAlert) => {

    e.preventDefault();
    const logedIn = await loginUser( cedula, contra, setUser );
    //FALTA REDIRECCIONAR DESDE EL OTRO SISTEMA
    if ( !logedIn ) {
        setOpenAlert( true );
    }
}