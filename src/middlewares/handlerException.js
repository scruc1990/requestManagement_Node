 
import { logger } from '../utils/functions/logger.js';

const handlerException = (err, _, res, __) => {
    logger.error(err.message);
    logger.error(err.type);

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