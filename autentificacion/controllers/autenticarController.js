import {autenticar} from '../services/autenticar.js';

export const autenticarController = async (req, res) => {

    const {username, password} = req.body;
    try{
        console.log(req.body);
        const resultado = await autenticar(username, password);
        res.json(resultado);
    }   catch(error){
        console.error('Error en controlador de autenticación:', error);
        res.status(401).json({message: error.message, status: 'error'});
    }

}