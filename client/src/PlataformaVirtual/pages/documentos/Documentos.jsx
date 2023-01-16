

import { useParams, useNavigate } from "react-router-dom";

import { Breadcrums, NavBar } from "../../../ui";

import { Box } from "@mui/system"
import { Folder, Article, FileDownload } from '@mui/icons-material';


export const Documentos = () => {

  const navigate = useNavigate()

  const { id, nombre } = useParams()
  const lista = []

  const idCarpeta = '1'

  const nombreCarpeta = 'ApuntesmIDORIYA' //Se debe tomar el nombre de la carpeta que creo el cliente

  const urlCarpeta = `/documentos/${id}/${nombre}/${idCarpeta}/${nombreCarpeta}`

  lista.push('Menú Principal')
  lista.push(nombre)


  const documentos = []

  documentos.push('Documento 1')

  const carpetas = []


  carpetas.push('Carpeta 1')


  return (
    <>
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ width: '80%' }} >
          <Breadcrums ruta={lista} direccion='Documentos' />
        </Box>
      </Box>

      <Box sx={{ background: '', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ width: '80%', background: '', border: 'solid', borderColor: '#0B92DC', height: '70vh', overflowY: 'auto' }}>

          {carpetas.map((carp) => (<Box sx={{ width: '97%', background: '#E3E2E2', margin: '2vh', borderRadius: '5px' }} onClick= {()=> navigate(`/documentos/${id}/${nombre}/${idCarpeta}/${nombreCarpeta}`)}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '1vh' }} > 
              <Folder sx={{ color: '  rgb(7, 86, 114)' }} />
                <h7 style={{ color: '#0B92DC', marginLeft: '1vh' }}>
                  {carp}
                </h7>
            </Box>
          </Box>))}

          {documentos.map((doc) => (<Box sx={{ width: '97%', background: '#E3E2E2', margin: '2vh', borderRadius: '5px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '1vh' }}>
              <Article sx={{ color: '  rgb(7, 86, 114)' }} /><h7 style={{ color: '#0B92DC', marginLeft: '1vh' }}>{doc}</h7>
              <FileDownload sx={{ color: '  rgb(7, 86, 114)', marginLeft:'auto' }} />
            </Box>
          </Box>))}

        </Box>
      </Box>
    </>
  )
}
