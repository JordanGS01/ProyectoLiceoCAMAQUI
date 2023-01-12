

import { Box, Typography, Modal } from '@mui/material';

import { useForm } from '../../../PlataformaVirtual/hooks/useForm'

import { ModalSingleInputForm } from './ModalSingleInputForm'
import { ModalSingleInputButtons } from './ModalSingleInputButtons'

import { stylesBoxModal, stylesTitleModal } from '../ModalVisualizacion/ClasesSxModal'

export const ModalSingleInput = ({ titulo, tituloInput, tituloObj, open, onClose, onSubmitForm }) => {
    const { formState, onInputChange, onResetForm } = useForm({
        tituloF: tituloObj
    })
    const { tituloF } = formState

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formState, onResetForm);
    }

    return (
        <Modal
            open={open}
            aria-labelledby="Modal para modificar, ver, crear y eliminar contenido"
        >
            <Box sx={stylesBoxModal}>

                <Typography
                    id="modal-modal-title"
                    variant="h4" 
                    component="h2"
                    gutterBottom 
                    sx={stylesTitleModal}
                    className="ModalVisualizacion-Titulo"
                >
                    { titulo }
                </Typography>

                <form onSubmit={handleOnSubmit}>
                    <ModalSingleInputForm
                        onInputChange={onInputChange}
                        titulo={tituloF}
                        tituloInput={tituloInput}
                    />
                    
                    <ModalSingleInputButtons
                        onClose={onClose}
                    />
                </form>

            </Box>
        </Modal> 
      )
}
