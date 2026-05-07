import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const createToken = (user) => {
     const token = jwt.sign({ id: user.id, correo: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
     return token;
}


export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        return decoded;
    } catch (error) {
        console.error('Error al verificar el token:', error);
        throw new Error('Token inválido');
    }
}

export const longTimeToken = (user) => {
    try{

        const token = jwt.sign({ id: user.user_user, correo: user.user_email }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return token;

    }catch(error){
        console.error('Error al verificar el token:', error);
        throw new Error('Token inválido');
    }
}