import {pool} from '../../db/conectar.js';
import {createToken} from './tokenCreation.js';
import dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
dotenv.config();


const query = 'SELECT * from us_user where user_email = $1';

export const autenticar = async (username, password) => {

    try{
        console.log('este es el correo', username);
        const result = await pool.query(query, [username])
        const user = result.rows[0];

        if(!user) throw new Error('Usuario no encontrado');

        const passwordMatch = await bcrypt.compare(password, user.user_password);

        if(!passwordMatch) throw new Error('Contraseña incorrecta');

        const token =  createToken({id: user.user_user, email: user.user_email});
        return {message: 'Autenticación exitosa', token, user: user.user_user, status: 'ok'};
    }catch(error){

        console.error('Error en autenticación:', error);
        throw error;
        
    }

}