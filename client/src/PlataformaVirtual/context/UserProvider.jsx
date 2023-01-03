

import { useState, useEffect } from 'react'
import { UserContext } from './UserContext'


const userDataInitialState = {
    nombre: '',
    cedula: 0,
    tipo: ''
}

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState(userDataInitialState);
    const [loged, setLoged] = useState(false);

    /* Guarda los datos del usuario en un objeto y en el localStorage */
    const setUser = ({ nombre, cedula, tipo }) => {
        const user = {
            nombre,
            cedula,
            tipo
        }

        setUserData(user);
        
        window.localStorage.setItem('user', JSON.stringify(user));
        
        setLoged( true );
    }

    /* Desloguea el usuario del sistema, elimina los datos de este que estaban
    almacenados en el localStorage */
    const logOutUser = () => {
        //Se elimina del localStorage
        window.localStorage.removeItem('user');
        //Se limpian las variables locales del context
        setUserData(userDataInitialState);
        setLoged( false );
    }

    const isStudent = () => {
        return userData.tipo === 'E'
    }

    const isProfessor = () => {
        return userData.tipo === 'P'
    }

    const isAdmin = () => {
        return userData.tipo === 'A'
    }

    useEffect(() => {
      const userString = window.localStorage.getItem('user');

      if( userString ) {
        const user = JSON.parse(userString);
        setUserData( user );
        setLoged( true );
      }
    }, [])
    


    return (
        <UserContext.Provider value={{ 
            userData, setUser, logOutUser,
            loged, isStudent, isProfessor,
            isAdmin
        }}>
            { children }
        </UserContext.Provider>
    )
}