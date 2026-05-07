import e, {Router} from 'express';
import {obtenerInfoController} from '../general/controllers/obtenerInformacionController.js';



const router = Router();

router.get('/', (req, res) => {

    res.json({status: 'ok', message: 'La app está funcionando correctamente.'});
});

router.post('/obtenerInfo', obtenerInfoController);


export default router;
