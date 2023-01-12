

import { useState, useEffect, useContext } from 'react'

import { UserContext } from '../../../../context/UserContext'

import { Box, Button } from '@mui/material';

import { BotonesProfesor } from '../BotonesProfesor/BotonesProfesor';
import { ListaCursos } from '../ListaCursos/ListaCursos'

import { stylesBoxButton, stylesButtonJoinGroup, stylesBoxGroupsList } from './ClasesSxMenuCursos'
import './MenuCursos.css'

import { getAllUserGroups } from '../../helpers'


export const MenuCursos = ({ tipo }) => {
    const { getUserData, isProfessor } = useContext(UserContext);
    const [cursos, setCursos] = useState([]);
    const [changed, setChanged] = useState(false);

    const onChangedGroups = () => setChanged(!changed);

    useEffect(() => {
      const { cedula } = getUserData();
      getAllUserGroups(cedula, setCursos);
    }, [changed])


    return (
        <Box className='MenuCursos-Box'>
            <div className="MenuCursos-Container">
                <h2 className="MenuCursos-H2">Grupos</h2>
                {
                tipo == 'P' ? 
                <BotonesProfesor
                    handleChanged={onChangedGroups}
                    cursos={cursos}
                /> 
                :
                <Box sx={stylesBoxButton}>
                    <Button sx={stylesButtonJoinGroup}>
                        Unirse a clase
                    </Button>
                </Box>
                }
            </div>
            <Box sx={stylesBoxGroupsList}>
                <ListaCursos
                    cursos = { cursos }
                    isProfessor = { isProfessor }
                    onChangedGroups = { onChangedGroups }
                />
            </Box>
        </Box>
    )
}
