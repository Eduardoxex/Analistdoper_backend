import {pool} from '../../db/conectar.js';


const query_all = 'SELECT * FROM op_anali order by anali_anali';
const query_by_id = 'SELECT * FROM op_anali WHERE anali_anali = $1 order by anali_anali';
const query_delet_by_id = 'DELETE FROM op_anali WHERE anali_anali = $1';
const query_acoplamineto = "SELECT * FROM op_anali where anali_capacidadDeAcoplamiento > $1";
const query_resultadoFinal = "SELECT * FROM op_anali WHERE anali_resultadofinal = $1 ORDER BY anali_anali";

export const getAllCV = async () =>{


    const resultado = await pool.query(query_all);
    return resultado.rows;

}

export const getCvById = async (id) =>{
    const resultado = await pool.query(query_by_id, [id]);
    //console.log(resultado.rows);
    return resultado.rows;

}

export const deletAnalisis = async (id) =>{

    const resultado = await pool.query(query_delet_by_id, [id]);
    console.log(resultado.rows)
    const respuesta = await pool.query(query_all);
    return respuesta.rows;


}


export const getByCapacidadAcoplamiento = async (capacidad) =>{

    const response = await pool.query(query_acoplamineto, [capacidad]);
    return response.rows;

}


export const getByResultado = async (resultado) =>{
    console.log('esto es lo que tengo: ', resultado);
    const respuesta = await pool.query(query_resultadoFinal, [resultado]);
    //console.log('esta es la respuesta: ', respuesta);
    return respuesta.rows;
}