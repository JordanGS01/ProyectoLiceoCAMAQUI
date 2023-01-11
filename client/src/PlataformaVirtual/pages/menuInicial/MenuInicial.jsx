

import { useContext, useEffect } from "react"

import { useNavigate } from "react-router-dom"; 

import { UserContext } from "../../context/UserContext"

import { NavBar } from "../../../ui";
import { Tareas } from "./components";

import { MenuCursos } from "./components/MenuCursos/MenuCursos";

import './MenuInicial.css'

import { Box } from "@mui/system";


export const MenuInicial = () => {

  const navigate = useNavigate();
  const { isAdmin, logOutUser, userData, loged } = useContext(UserContext);

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
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{background:''}}>
          <MenuCursos tipo={userData.tipo} />
        </Box>
        <Tareas/>
      </Box>

    </>
  )
}
