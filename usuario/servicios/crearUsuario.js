import {pool}   from '../../db/conectar.js';
import * as bcrypt from 'bcrypt';


const query = 'INSERT INTO us_user (user_email, user_password, user_name, user_lastName, user_name2, user_lasName2, user_posicion) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';

export const crearUsuario = async (informacion) => {

    try{

        const { correo, contraseña, nombre, apellido, nombre2, apellido2, ocupacion } = informacion;

        if(!correo || !contraseña || !nombre || !apellido) throw new Error('Faltan campos obligatorios');

        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) === false) throw new Error('Correo electrónico no válido');

        if(contraseña.length < 8) throw new Error('La contraseña debe tener al menos 8 caracteres');

        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const result = await pool.query(query, [correo, hashedPassword, nombre, apellido, nombre2, apellido2, ocupacion]);
        return result.rows[0];

    }catch(error){
        console.error('Error al crear usuario:', error);
        throw new Error('Error al crear usuario');
    }
};

export const obtenerContrase = async (palabra) => {

    return await bcrypt.hash(palabra, 10);
}