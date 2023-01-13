

import { useContext } from "react"

import { UserContext } from "../../../../context/UserContext"

import { InputBase, IconButton, Box, Paper } from '@mui/material';

import { AutoFixHigh, Delete } from "@mui/icons-material"

export const NoticiasRecientes = () => {

    const Noticias = []

    Noticias.push('Hacer la cocina')

    const { isStudent, isProfessor } = useContext(UserContext);

    return (
        <>

            {(isStudent() && 
                <Box sx={{ height: '40vh', overflow: 'auto' }}>
                    {Noticias.map((Noticia) => (
                        <Box sx={{ background: '#BAC8D0', color: '#0B92DC', marginTop: '1vh', padding: '10px', borderRadius: '5px' }}> {Noticia}</Box>
                    ))}
                </Box>
            )}

            {(isProfessor() && 
                <Box sx={{ height: '40vh', overflow: 'auto' }}>
                    {Noticias.map((Noticia) => (
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '99.2%', marginTop: '1vh', borderRadius: '5px' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                value={Noticia}
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />

                            <IconButton
                                type="button"
                                sx={{
                                    p: '10px',
                                    bgcolor: '#74d447',
                                    borderRadius: '0px',
                                    color: 'white',
                                    ':hover': {
                                        bgcolor: '#4AD447'
                                    }
                                }}
                                aria-label="Modificar"
                            >
                                <AutoFixHigh />
                            </IconButton>

                            <IconButton
                                color="primary"
                                sx={{
                                    p: '10px',
                                    bgcolor: '#dd4c4c',
                                    borderRadius: '0px 5px 5px 0px',
                                    color: 'white',
                                    ':hover': {
                                        bgcolor: '#F63030'
                                    }
                                }}
                                aria-label="Eliminar"
                            >
                                <Delete />
                            </IconButton>

                        </Paper>
                    ))}
                </Box>
            )}



        </>

    )
}
