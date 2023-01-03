

import { useContext } from "react"

import { UserContext } from "../../context/UserContext"


export const MenuInicial = () => {
  const { loged } = useContext(UserContext);

  console.log(loged);
  return (
    <div>MenuInicial</div>
  )
}
