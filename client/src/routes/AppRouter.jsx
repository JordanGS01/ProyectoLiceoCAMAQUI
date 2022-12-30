

import { Routes, Route } from 'react-router-dom'

import { PaginaPrincipal } from '../PaginaPrincipal/PaginaPrincipal'
import { PlataformaVirtualRouter } from '../PlataformaVirtual/router/PlataformaVirtualRouter'
import { Prematricula } from '../Prematricula/Prematricula'


export const AppRouter = () => {
  return (
    <>
    <Routes>

        <Route path='paginaPrincipal' element={ <PaginaPrincipal /> }/>
        <Route path='pv' element={ <PlataformaVirtualRouter /> }/>
        <Route path='prematricula' element={ <Prematricula /> }/>

        <Route path='/*' element={ <PlataformaVirtualRouter /> }/>
        
    </Routes>
    </>
  )
}
