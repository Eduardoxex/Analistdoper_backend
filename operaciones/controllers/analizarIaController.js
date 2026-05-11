
import {analizar} from '../services/analisarCv.js';

export async function analizarCV(req, res){
    try{

        const{textoCV, analista, descripcionPuesto} = req.body;
        const informacion = await analizar(textoCV, analista, descripcionPuesto);

        res.status(201).json({mensage: 'Análisis realizado y guardado exitosamente', status: 'ok', data: informacion})

    }catch(error){
        console.log('Ha ocurrido un error: ', error);

        res.status(500).json({menssahe: 'Ha ocurrido un error en la etapa del controlador', err: error});
    }

}