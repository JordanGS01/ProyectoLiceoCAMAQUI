import { useContext } from "react"

import { UserContext } from "../../context/UserContext"

import { NavBar } from "../../../ui/components/NavBar/NavBar";

import { MenuCursos } from "./components/MenuCursos/MenuCursos";

import './MenuInicial.css'

import { Box } from "@mui/system";

import { Tareas } from "./components/Tareas/Tareas";

import { InformacionMenuInicial } from "./components/InformacionMenuInicial/InformacionMenuInicial";

import { Breadcrums } from "../../../ui/Breadcrums/Breadcrums";



export const MenuInicial = () => {
  const { isStudent, loged, userData, logOutUser } = useContext(UserContext);
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
