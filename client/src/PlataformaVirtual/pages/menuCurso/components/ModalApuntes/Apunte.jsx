

import { useState } from "react"

import { Paper, InputBase } from "@mui/material"

import { BotonesModificarEliminarEnviar } from "./BotonesModificarEliminarEnviar"

import { useForm } from "../../../../hooks/useForm"


export const Apunte = ({ contenido, cedulaUsuario, idGrupo, id, handleChanged }) => {
    const { formState, onInputChange } = useForm({
        contenido,
        cedula: cedulaUsuario,
        idGrupo,
        idNote: id
    })
    const { contenido: apunte } = formState;

    const [activeModified, setActiveModified] = useState(true);

    const handleDisactivedModify = () => setActiveModified(true);
    const handleActiveModify = () => setActiveModified(false);
    
    return (
        <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: '80vh', mt: 1, bgcolor:'#BAC8D0' }}
        >
        
        <InputBase
            disabled={activeModified}
            sx={{ flex: 1, pl: 1 }}
            inputProps={{ 'aria-label': 'search google maps' }}

            name="contenido"
            value={apunte}
            onChange={onInputChange}
        />
        
        <BotonesModificarEliminarEnviar
            activeModified = {activeModified}
            apunte={formState}
            onModify = {handleActiveModify}
            onDisableModify = {handleDisactivedModify}
            handleChanged={handleChanged}
        />

        </Paper>
    )
}
