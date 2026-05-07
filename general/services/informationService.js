import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const infoConection = {
    host: process.env.NO_host,
    port: process.env.NO_port,
    secure: process.env.NO_secure,
    auth: {
        user: process.env.NO_user,
        pass: process.env.NO_pass
    }
}

const  enviaremail = nodemailer.createTransport(infoConection);

enviaremail.verify ((error, success) =>{
    if(error){
        console.log('An error has occur: ', error);
        return;
    }else{
        console.log('Conexion exitosa: ', success)
    }
});

export default enviaremail;


