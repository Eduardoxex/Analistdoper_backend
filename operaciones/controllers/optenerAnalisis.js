import {getAllCV, getCvById, deletAnalisis, getByCapacidadAcoplamiento, getByResultado} from '../services/getAnalisiCv.js';


export async function getAllAnalisis(req, res){
    try{

        const resultado = await getAllCV();

        res.status(201).json({mensage: 'usuarios obtenidos correctamente', data: resultado})

    }catch(error){
        console.log('respuesta: ', error);
        res.status(500).json({mensage: 'Ha ocurrido un error', err: error});
    }

}

export async function getAnalisisById(req, res){
    try{
        console.log(req.body);
        const {id} = req.body;
        const resultado = await getCvById(id);
    
        res.status(201).json({mensage: 'usuarios obtenidos correctamente', data: resultado})

    }catch(error){
        console.log('respuesta: ', error);
        res.status(500).json({mensage: 'Ha ocurrido un error', err: error});
    }

}



export async function eliminarById(req, res){
   try{
    const {id} = req.body;
    const respuesta = await deletAnalisis(id);

    res.status(200).json({status: 'Registro eliminado exitosamente', data: respuesta});
   }catch(error){
    console.log('Ha ocurido un error: ', error);
    res.status(500).json({mensage: 'Ha ocurrido un error', err: error});
   }
}

export async function obtenerCapacidad(req, res) {
    try{
        const {capacidad} = req.body;
        const respuesta  = await getByCapacidadAcoplamiento(capacidad);
    res.status(200).json({status: 'Registro eliminado exitosamente', data: respuesta});

    }catch(error){
            console.log('Ha ocurido un error: ', error);
    res.status(500).json({mensage: 'Ha ocurrido un error', err: error});
    }
}


export async function obtenerResultados(req, res) {

    try{
        const {resultado} = req.body;
        console.log(req.body);
        const respuesta = await getByResultado(resultado);
        res.status(200).json({status: 'Registro eliminado exitosamente', data: respuesta});

    }catch(error){
            console.log('Ha ocurido un error: ', error);
    res.status(500).json({mensage: 'Ha ocurrido un error', err: error});
    }
}