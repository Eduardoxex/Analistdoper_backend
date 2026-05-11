import modelo from '../../inteligenciaArtificial/coneccion.js';
import {pool} from '../../db/conectar.js';


export const analizar = async (textoCV, analista, descripcionPuesto) => {
    

   const promt =  `
    Actúa como un experto en reclutamiento IT. 
    Analiza el siguiente CV basándote en la descripción del puesto proporcionada.
    
    CV del candidato: ${textoCV}
    Descripción del puesto: ${descripcionPuesto}

    Responde ESTRICTAMENTE en formato JSON con la siguiente estructura:
    {
      "resultadoFinal": "Seleccionado/Rechazado",
      "keyWords": ["palabra1", "palabra2"],
      "recomendaciones": ["mejora1", "mejora2"],
      "capacidadDeAcoplamiento": 0-100
    }
  `  
  
  const result = await modelo.generateContent(promt);
  const respuesta = await result.response.text();
  const onjetoResultado = JSON.parse(respuesta);

  return insertarIntoTableOp_anali(textoCV, descripcionPuesto, onjetoResultado, analista);
}



async function  insertarIntoTableOp_anali(textoCV, descripcionPuesto, respuestaIA, analista){

    const consulta = 'insert into op_anali(anali_cv, anali_descripcion, anali_user, anali_keyWords, anali_resultadoFinal, anali_recomendaciones, anali_capacidadDeAcoplamiento) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *'

    const resultado = await pool.query(consulta, [textoCV, descripcionPuesto, analista, respuestaIA.keyWords, respuestaIA.resultadoFinal, respuestaIA.recomendaciones, respuestaIA.capacidadDeAcoplamiento]);
        console.log('este es el resultado', resultado.rows[0]);

    return resultado.rows[0];

}