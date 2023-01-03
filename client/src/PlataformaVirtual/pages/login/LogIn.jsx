

import { FormLogin } from './components'

import './LogIn.css'

//TODO: VERIFICAR SI EL USUARIO ESTA CONECTADO
//SI LO ESTA, SE REDIRECCIONA AL MENU PRINCIPAL
export const LogIn = () => {
  return (
    <div className='Login-Container'>
      <FormLogin />
    </div>
  )
}
