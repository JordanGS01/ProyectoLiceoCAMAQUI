

import { useState, useEffect, useContext } from 'react'

import { UserContext } from '../../../../context/UserContext'

import { Box } from '@mui/material';

import { BotonesProfesor, ListaCursos, BotonUnirseClase } from '../';

import { stylesBoxGroupsList } from './ClasesSxMenuCursos'
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
                tipo === 'P' ? 
                <BotonesProfesor
                    handleChanged={onChangedGroups}
                /> 
                :
                <BotonUnirseClase
                    handleChanged={onChangedGroups}
                />
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
