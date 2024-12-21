import { purify } from '../utils/functions/purify.js';
import ValidateException from '../utils/functions/validationException.js';

const purifyInyection = (req, _, next) => {

    if (purify(req.body) || purify(req.params) || purify(req.query)) {
        throw new ValidateException('Injection detected', 400, 'injection');
    }

    next();
};

export default purifyInyection;