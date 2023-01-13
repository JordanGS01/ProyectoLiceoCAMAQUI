import { Box } from '@mui/system'
import React from 'react'


import Paper from '@mui/material/Paper';

import { useContext } from "react"


import { UserContext } from "../../../../context/UserContext"


export const NoticiasRecientes = () => {

    const Noticias = []

    Noticias.push('Hacer la cocina')

    Noticias.push('Hacer la cocina')

    Noticias.push('Hacer la cocina')

    Noticias.push('Hacer la cocina')

    Noticias.push('Hacer la coci')

    Noticias.push('Hacer la coci')

    Noticias.push('Hacer la coci')

    Noticias.push('Hacer la coci')

    Noticias.push('Hacer la coci')

    const { isStudent, isAdmin, logOutUser, userData, loged, isProfessor } = useContext(UserContext);

    return (
        <>

            {(isStudent() && <Box sx={{ height: '40vh', overflow: 'auto' }}>
                {Noticias.map((Noticia) => (
                    <Box sx={{ background: '#BAC8D0', color: '#0B92DC', marginTop: '1vh', padding: '10px', borderRadius: '5px' }}> {Noticia}</Box>
                ))}
            </Box>
            )}

            {(isProfessor() && <Box sx={{ height: '40vh', overflow: 'auto' }}>
                {Noticias.map((Noticia) => (
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '99.2%', marginTop:'1vh', borderRadius:'5px'}}
                    >
                        <Box sx={{ml: 1, flex: 1, color:'#0B92DC', with:'100px', background:''}}> {Noticia}</Box>
                    </Paper>
                ))}
            </Box>
            )}



        </>

    )
}
