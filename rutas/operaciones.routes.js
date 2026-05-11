import {Router} from 'express';
import {analizarCV} from '../operaciones/controllers/analizarIaController.js';
import {getAllAnalisis, getAnalisisById, eliminarById, obtenerCapacidad, obtenerResultados} from '../operaciones/controllers/optenerAnalisis.js';

const router = Router();

router.post('/analizarCv', analizarCV);
router.get('/getAllAnalisis', getAllAnalisis);
router.post('/getAnalisisById', getAnalisisById);
router.post('/deleteRegistro', eliminarById);
router.post('/getAnalisisByCapacidad', obtenerCapacidad);
router.post('/getAnalisisByResultado', obtenerResultados);



export default router;