

import { useContext, useEffect } from "react"

import { useNavigate } from "react-router-dom"; 

import { UserContext } from "../../context/UserContext"

import { NavBar } from "../../../ui";
import { Breadcrums } from "../../../ui/Breadcrums/Breadcrums";

import { MenuCursos, InformacionMenuInicial, Tareas } from "./components";

import './MenuInicial.css'

import { Box } from "@mui/material";


export const MenuInicial = () => {

  const navigate = useNavigate();
  
  const { isStudent ,isAdmin, logOutUser, userData, loged } = useContext(UserContext);

  useEffect(() => {
      if (!loged) {
        navigate('/login')
      } else if (isAdmin()) {
        navigate('/admin')
      }
  }, [loged])


  return (
    <>
      <NavBar
        nombreUsuario={userData.nombre}
        onLogOut={logOutUser}
      />
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box>
          <Breadcrums ruta='Menú Principal'/>
          <MenuCursos tipo={userData.tipo} />
          {(isStudent() && <InformacionMenuInicial />)}
        </Box>
        <Tareas />  
      </Box>

    </>
  )
}
