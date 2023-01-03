

import axios from "axios"


export const loginUser = async ( cedula, contra, setUser ) => {
    
    let state;

    await axios.get('http://localhost:3300/login',{
        headers:{
            cedula,
            contra
        }
    }).then(({ data }) => {

        setUser( data );
        state = true;

    }, ( error ) => {
        
        state = false;

    })
    return state;
    
}