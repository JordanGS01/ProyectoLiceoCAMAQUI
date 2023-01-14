import React from 'react'

import { Box } from '@mui/system'

import './Noticias.css'

import { NoticiasRecientes } from '../NoticiasRecientes/NoticiasRecientes'



import { useContext } from "react"


import { UserContext } from "../../../../context/UserContext"


export const Noticias = () => {

    const { isStudent, isAdmin, logOutUser, userData, loged, isProfessor } = useContext(UserContext);

    return (
        <>
            {(isStudent() && <Box sx={{ marginTop: '2vh' }}>
                <p style={{ fontFamily: 'Arial', color: '#0B92DC', fontSize: '13px' }}><em>Noticias Recientes</em></p>
                <div class='NoticiasRecientes-linea'></div>
                <Box sx={{ background: '#D9D9D9', width: '97.5%', color: '#0B92DC', padding: '2vh', borderRadius: '5px' }}>
                    <NoticiasRecientes></NoticiasRecientes>
                </Box>
            </Box>)}

            {(isProfessor() && <Box sx={{ marginTop: '2vh' }}>
                <p style={{ fontFamily: 'Arial', color: '#0B92DC', fontSize: '13px' }}><em>Noticias</em></p>
                <div class='NoticiasRecientes-linea'></div>
                <Box sx={{ background: '#D9D9D9', width: '97.5%', color: '#0B92DC', padding: '2vh', borderRadius: '5px'}}>
                    <NoticiasRecientes></NoticiasRecientes>
                </Box>
            </Box>)}



        </>
    )
}
