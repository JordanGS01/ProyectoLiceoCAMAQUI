

import { useContext } from "react"

import { UserContext } from "../../context/UserContext"

import { NavBar } from "../../../ui/components/NavBar/NavBar";

export const MenuInicial = () => {
  const { loged, userData, logOutUser } = useContext(UserContext);

  console.log(loged);
  return (
    <div>
      <NavBar 
        nombreUsuario = { userData.nombre }
        onLogOut = { logOutUser }
      />
      MenuInicial
    </div>
  )
}
