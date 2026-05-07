import {enviarInformacion} from '../services/infoApp.js';


export async function obtenerInfoController(req, res) {

    try{
        const info = req.body;
        const respuesta = enviarInformacion(info);
        res.status(200).json(respuesta);


    }catch(error){
        console.log('A ocurrido un error: ', error);
        res.status(500).json({mensaje: 'Error al intentar enviar la informacion', contenido: emailEnviar   });
    }
}