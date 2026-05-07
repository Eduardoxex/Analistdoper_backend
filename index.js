import express from 'express';
import cors from 'cors';
import routerIndex from './rutas/index.routes.js';
import routerAutentification from './rutas/autentificacion.routes.js';
import {obtenerContrase} from './usuario/servicios/crearUsuario.js';

const PORT = process.env.Listener_port || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/info', routerIndex);
app.use('/api/autentificacion', routerAutentification);

app.listen(PORT, async() => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

