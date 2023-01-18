
import { HeaderPrematricula } from "./HeaderPrematricula/HeaderPrematricula"

import { Box, FormControl, Typography } from "@mui/material"

export const Prematricula = () => {
  return (
    <>
      <HeaderPrematricula />
      <Box sx={{ marginTop: '10vh', background: '', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ background: '#DFDDDD', width: '60%', borderRadius: '5px', height: '' }}>
          <Box sx={{ background: '#0B92DC', justifyContent: 'center', display: 'flex', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', padding: '10px' }}>
            <Typography variant="" color="white" fontSize={35} fontFamily='Arial'>Formulario de prematrícula</Typography>
          </Box>
          <form  action="mailto:jordan-guzman-salas@hotmail.com" enctype="multipart/form-data" method="POST" name="EmailForm">
            <FormControl sx={{ m: 2, border: 'solid', padding: '10px', borderColor: '#0B92DC', borderRadius: '5px' }}>
              <Typography sx={{ color: '#0B92DC' }} variant="h6" color="initial"> Fotos de la cécula del encargado legal</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: '#0B92DC', marginBottom: '2vh' }}> Parte delantera</Typography>
                  <label style={{ color: '#0B92DC', fontSize: '20px', fontFamily: 'Arial', marginRight: '2vh' }} for="FrenteCedulaEncargadoLegal">Subir una foto:</label>
                  <input type="file" id="files" name="FrenteCedulaEncargadoLegal" multiple />
                </Box>
                <Box ml={5}>
                  <Typography variant="h6" sx={{ color: '#0B92DC', marginBottom: '2vh' }}> Parte trasera</Typography>
                  <label style={{ color: '#0B92DC', fontSize: '20px', fontFamily: 'Arial', marginRight: '2vh' }} for="TraseraCedulaEncargadoLegal">Subir una foto:</label>
                  <input type="file" id="files" name="TraseraCedulaEncargadoLegal" multiple />
                </Box>
              </Box>
            </FormControl>

            
            <FormControl sx={{ m: 2, border: 'solid', padding: '10px', borderColor: '#0B92DC', borderRadius: '5px' }}>
              <Typography sx={{ color: '#0B92DC' }} variant="h6" color="initial"> Datos del encargado</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: '#0B92DC', marginBottom: '2vh' }}> Nombre completo</Typography>
                  <input type="text" id="" name="NombreCompletoEncargado" multiple />
                </Box>
                <Box ml={11}>
                  <Typography variant="h6" sx={{ color: '#0B92DC', marginBottom: '2vh' }}> Número de telefono</Typography>
                  <input type="text" id="" name="NumeroTelefonoEncargado" multiple />
                </Box>
              </Box>
            </FormControl>


            <FormControl sx={{ m: 2, border: 'solid', padding: '10px', borderColor: '#0B92DC', borderRadius: '5px' }}>
              <Typography sx={{ color: '#0B92DC' }} variant="h6" color="initial"> Fotos de la cécula del Estudiante</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: '#0B92DC', marginBottom: '2vh' }}> Parte delantera</Typography>
                  <label style={{ color: '#0B92DC', fontSize: '20px', fontFamily: 'Arial', marginRight: '2vh' }} for="FrenteCedulaEstudiante">Subir una foto:</label>
                  <input type="file" id="files" name="FrenteCedulaEstudiante" multiple />
                </Box>
                <Box ml={5}>
                  <Typography variant="h6" sx={{ color: '#0B92DC', marginBottom: '2vh' }}> Parte trasera</Typography>
                  <label style={{ color: '#0B92DC', fontSize: '20px', fontFamily: 'Arial', marginRight: '2vh' }} for="TraseraCedulaEstudiante">Subir una foto:</label>
                  <input type="file" id="files" name="TraseraCedulaEstudiante" multiple />
                </Box>
              </Box>
            </FormControl>



            <FormControl sx={{ m: 2, border: 'solid', padding: '10px', borderColor: '#0B92DC', borderRadius: '5px' }}>
              <Typography sx={{ color: '#0B92DC' }} variant="h6" color="initial"> Datos del estudiante</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                  <Typography variant="h6" sx={{ color: '#0B92DC', marginBottom: '2vh' }}> Fotografía tamaño pasaporte</Typography>
                  <label style={{ color: '#0B92DC', fontSize: '20px', fontFamily: 'Arial', marginRight: '2vh' }} for="FotoTamañoPasaporteEstudiante">Subir una foto:</label>
                  <input type="file" id="files" name="FotoTamañoPasaporteEstudiante" multiple />
                </Box>
                <Box ml={1.5}>
                  <Typography variant="h6" sx={{ color: '#0B92DC', marginBottom: '2vh' }}> Poliza del INS</Typography>
                  <label style={{ color: '#0B92DC', fontSize: '20px', fontFamily: 'Arial', marginRight: '2vh' }} for="PolizaInsEstudiante">Subir documento:</label>
                  <input type="file" id="files" name="PolizaInsEstudiante" multiple />
                </Box>
              </Box>
            </FormControl>

            <Box sx={{ background: '', marginBottom:'1vh' }}>
              <Box sx={{display:'flex', flexDirection:'row-reverse', mr: 6}} >
                <input style={{width:'100px', height:'4VH', background:'#0B92DC', fontFamily:'Arial',color:'white', border:'none', borderRadius:'5px'}} type="submit" value="Enviar" />
              </Box>
            </Box>

          </form>
        </Box>
      </Box>


    </>
  )
}
