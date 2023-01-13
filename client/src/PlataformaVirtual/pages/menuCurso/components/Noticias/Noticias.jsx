

import { useContext } from "react"

import { Box } from '@mui/material'

import { UserContext } from "../../../../context/UserContext"
import { NoticiasRecientes, AgregarNoticia } from '../'

import './Noticias.css'


export const Noticias = () => {

    const { isStudent, isProfessor } = useContext(UserContext);

    return (
        <>
            {(isStudent() && <Box sx={{ marginTop: '2vh' }}>
                <p style={{ fontFamily: 'Arial', color: '#0B92DC', fontSize: '13px' }}>
                    <em>
                        Noticias Recientes
                    </em>
                </p>

                <div class='NoticiasRecientes-linea'></div>

                <Box sx={{ background: '#D9D9D9', width: '97.5%', color: '#0B92DC', padding: '2vh', borderRadius: '5px' }}>
                    <NoticiasRecientes />
                </Box>
            </Box>)}

            {(isProfessor() && 
                <Box sx={{ marginTop: '2vh' }}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                        <p style={{ fontFamily: 'Arial', color: '#0B92DC', fontSize: '13px' }}>
                            <em>
                                Noticias
                            </em>
                        </p>
                        
                        <AgregarNoticia />
                    </Box>

                    <div class='NoticiasRecientes-linea'></div>
                    
                    <Box sx={{ background: '#D9D9D9', width: '97.5%', color: '#0B92DC', padding: '2vh', borderRadius: '5px' }}>
                        <NoticiasRecientes />
                    </Box>
                </Box>
            )}



        </>
    )
}
