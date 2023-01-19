

import { Routes, Route, Navigate } from 'react-router-dom'
import { Admin } from '../pages/admin/Admin'
import { LogIn } from '../pages/login/LogIn'
import { MenuCurso } from '../pages/menuCurso/MenuCurso'
import { MenuInicial } from '../pages/menuInicial/MenuInicial'
import { SignIn } from '../pages/signIn/SignIn'

export const PlataformaVirtualRouter = () => {
  return (
    <>
      <Routes>
        <Route path='admin' element={<Admin />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/menuCurso/:id/:nombre'  element={<MenuCurso />}/>
        <Route path='menuInicial' element={<MenuInicial />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </>
  )
}
