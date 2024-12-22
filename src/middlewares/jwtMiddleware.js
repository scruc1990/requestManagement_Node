import { expressjwt as jwt } from 'express-jwt';
import value from '../config/env.js';

const secretKey = value.SECRET_KEY;

/**
 * Implementación del Middleware para validar el token JWT
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
const jwtMiddleware = jwt({
  secret: secretKey,
  algorithms: ['HS256']
});

export default jwtMiddleware;
