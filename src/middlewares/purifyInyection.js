import { purify } from '../utils/functions/purify.js';
import CustomException from '../utils/functions/CustomException.js';

/**
 * Middleware para purificar las entradas de la petición
 * 
 * @param {*} req Objeto de petición 
 * @param {*} next Función para continuar con la petición
 * 
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
const purifyInyection = (req, _, next) => {

    if (purify(req.body) || purify(req.params) || purify(req.query)) {
        throw new CustomException('Injection detected', 400, 'injection', null);
    }

    next();
};

export default purifyInyection;