 
import { logger } from '../utils/functions/logger.js';

/**
 * Middleware para manejar las excepciones, para no exponer
 * al usuario información sensible
 * 
 * @param {*} err Objeto del error lanzado 
 * @param {*} res Objeto de respuesta
 * 
 * @returns {Response} Respuesta de la petición
 * 
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
const handlerException = (err, _, res, __) => {
    logger.error(`${err.message} - ${err?.error?.message}`);


    let message = '';

    if (err.type === 'validation'
        || err.type === 'injection'
    ) {
        message = err.message;
    } else if (err.message.includes('token')) {
            message = 'Token no válido';
    } else {
        message = 'Ha ocurrido un error';
    }

    return res.status(400).json({
        success: false,
        message
    });
};

export default handlerException;