

import { useState } from 'react'
import { UserContext } from './UserContext'


const userDataInitialState = {
    nombre: '',
    cedula: 0,
    tipo: ''
}

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState(userDataInitialState);
    const [loged, setLoged] = useState(false);

    const setUser = ({ nombre, cedula, tipo }) => {
        setUserData({
            nombre,
            cedula,
            tipo
        })
        setLoged( true );
    }

    const logOutUser = () => {
        setUserData(userDataInitialState);
        setLoged( false );
    }

    return (
        <UserContext.Provider value={{ 
            userData,
            setUser,
            logOutUser,
            loged
        }}>
            { children }
        </UserContext.Provider>
    )
}