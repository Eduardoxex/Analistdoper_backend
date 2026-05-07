import {Router} from 'express';
import {autenticarController} from '../autentificacion/controllers/autenticarController.js';
import {creaUsuarioController} from '../usuario/controllers/crearUsuarioCll.js'

const router = Router();

router.post('/login', autenticarController);

router.post('/registrar', creaUsuarioController);


export default router;
