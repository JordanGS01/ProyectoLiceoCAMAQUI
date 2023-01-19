

import { Routes, Route } from 'react-router-dom'

import { PaginaPrincipal } from '../PaginaPrincipal/PaginaPrincipal'
import { UserProvider } from '../PlataformaVirtual/context/UserProvider'
import { PlataformaVirtualRouter } from '../PlataformaVirtual/router/PlataformaVirtualRouter'


export const AppRouter = () => {
  return (
    <>
    <UserProvider>
      <Routes>
          <Route path='paginaPrincipal' element={ <PaginaPrincipal /> }/>
          <Route path='pv' element={ <PlataformaVirtualRouter /> }/>
          <Route path='/*' element={ <PlataformaVirtualRouter /> }/>
      </Routes>
    </UserProvider>
    </>
  )
}
