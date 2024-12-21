 
import { logger } from '../utils/functions/logger.js';

const handlerException = (err, _, res, __) => {
    logger.error(err.message);

    if (err.type === 'validation') {
        return res.status(err.code).json({
            success: false,
            message: err.message
        });
    }
  
    if (err.type === 'injection') {
        return res.status(err.code).json({
            success: false,
            message: 'Inyeccion detectada'
        });
    }

    return res.status(400).json({
        success: false,
        message: 'Ha ocurrido un error'
    });
};

export default handlerException;