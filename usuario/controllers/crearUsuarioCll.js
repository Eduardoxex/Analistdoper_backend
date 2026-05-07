import { crearUsuario } from "../servicios/crearUsuario.js";

export async function creaUsuarioController(req, res) {
    try{
        const informacion = req.body;
        const nuevoUsuario = await crearUsuario(informacion);
        res.status(201).json({message: 'Usuario creado exitosamente', status: 'ok', user: nuevoUsuario.user_email, id: nuevoUsuario.user_user});
    }catch(error){
        console.error('Error al crear usuario:', error);

        if(error.message.includes('existe')){
            return res.status(400).json({message: error.message, status: 'error'});
        }
        res.status(500).json({message: 'Error al crear usuario', status: 'error'});
    }
}