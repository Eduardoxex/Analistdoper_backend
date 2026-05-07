import enviarEmail from './informationService.js';

export const enviarInformacion = async (datos) => {
    console.log('estos son los datos', datos);
    const emailEnviar = {
        from: `"Web Analistdoper" <${process.env.EMAIL_USER}>`,
      to: `${datos.email}`, // A donde te llegará el aviso
      subject: `Gracias por mostrar interes, nos contactaremos con tigo lo mas rapido posible${datos.nombre}`,
      html: `
        <h3>Hemos recibido tu informacion, nos pondremos en contacto con tigo para aclarar cualquier duda <strong style="color: blue;">Sera un placer hablar contigo</strong></h3>
        <p style="border: solid 2px black; border-radius: 5px;"><strong>Nombre:</strong> ${datos.nombre}</p>
        <p style="border: solid 2px black; border-radius: 5px;"><strong>Email:</strong> ${datos.email}</p>
        <p style="border: solid 2px black; border-radius: 5px;"><strong>Mensaje:</strong> ${datos.mensaje}</p>
      `
    }; 

    return await enviarEmail.sendMail(emailEnviar);


}

