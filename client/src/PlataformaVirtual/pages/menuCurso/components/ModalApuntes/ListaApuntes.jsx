

import { Box } from "@mui/material"
import { Apunte } from './Apunte'

export const ListaApuntes = ({ notes, handleChanged }) => {
  return (
    <Box sx={{ display:'flex', flexDirection:'column' }}>
      { notes.map( ({ id, contenido, cedula_usuario, id_grupo }) =>
        <Apunte
          key={id}
          contenido={contenido}
          cedulaUsuario={cedula_usuario}
          idGrupo={id_grupo}
          id={id}
          handleChanged={handleChanged}
        />
      )}
    </Box>
  )
}
