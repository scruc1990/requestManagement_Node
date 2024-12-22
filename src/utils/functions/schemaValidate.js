import joi from 'joi';
import CustomException from './CustomException.js';

/**
 * Función para validar un esquema de joi y saber si cumple con las reglas
 * de validación
 * 
 * @param {*} validations validaciones de joi 
 * @param {*} body cuerpo a validar
 * @param {*} type tipo de validación
 * @returns {*} valor validado
 * 
 * @throws {CustomException} Excepción de validación
 * 
 * @autor Cristian David Herrera
 * @date 2024-12-21
 */
const schemaValidate = (validations, body, type = 'validation') => {
    const schema = joi.object(validations);

    const { error, value } = schema.validate(body);

    if (error) throw new CustomException(error.details[0].message, 400, type, null);
    
    return value;
};

export default schemaValidate;