import { useContext } from "react"

import { UserContext } from "../../context/UserContext"

import { NavBar } from "../../../ui/components/NavBar/NavBar";

import { MenuCursos } from "./components/MenuCursos/MenuCursos";

import './MenuInicial.css'

import { Box } from "@mui/system";

import { Tareas } from "./components/Tareas/Tareas";

export const MenuInicial = () => {
  const { loged, userData, logOutUser } = useContext(UserContext);


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
