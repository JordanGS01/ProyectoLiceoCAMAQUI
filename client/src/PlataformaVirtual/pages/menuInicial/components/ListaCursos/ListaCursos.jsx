

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Tooltip, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

import { Alert } from '../../../../../ui/components/Alert';

import { stylesBotonEliminar } from './ClasesSxListaCursos'
import './ListaCursos.css'

import { deleteGroup } from '../../helpers'


export const ListaCursos = ({ cursos, isProfessor, onChangedGroups }) => {
  const navigate = useNavigate();

  const [openDeleteGroup, setOpenDeleteGroup] = useState(false);
  const [clickedId, setClickedId] = useState(false);

  const handleCloseModalDeleteGroup = () => setOpenDeleteGroup(false);
  const handleOpenModalDeleteGroup = () => setOpenDeleteGroup(true);
  const handleDeleteGroup = (id) => {
    setClickedId(id);
    handleOpenModalDeleteGroup();
  }

  const onDeleteGroup = () => {
    deleteGroup(clickedId, onChangedGroups);
    setOpenDeleteGroup(false);
  }

  { !cursos && <></> }
  return (
    <>
    <ul className="ListaCursos-Ul">
      {cursos.map(({ id_grupo, nombre }) => (
        <div className='ListaCursos-ContainerCurso'>
        
        <li
          key={id_grupo}
          id={id_grupo}
          className="ListaCursos-Li"
          onClick= {()=> navigate(`/menuCurso/${id_grupo}`)} 
        >
          {nombre}
        </li>
        {isProfessor() ?
          <Tooltip title="Eliminar" arrow>
              <IconButton 
                  aria-label="eliminar"
                  color="primary"
                  sx={stylesBotonEliminar}
                  onClick={()=>{handleDeleteGroup(id_grupo)}}
              >
                  <Delete />
              </IconButton>
          </Tooltip>
        : <></>
        }
        </div>
      ))}
    </ul>

    <Alert 
        open = { openDeleteGroup }
        handleClose = { handleCloseModalDeleteGroup }
        title = "Eliminar el grupo"
        content = "¿Está seguro de que quiere eliminar el grupo?"
        
        acceptButtonText = "Sí"
        acceptButtonFunction = { onDeleteGroup }

        closeButtonText="No"
        closeButtonFunction = { handleCloseModalDeleteGroup }

        oneButton = { false }
    />

    </>
  )
} 
