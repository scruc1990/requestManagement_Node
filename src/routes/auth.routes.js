import { Router } from 'express';
import AuthController from '../app/auth/controllers/AuthController.js';

/**
 * Rutas para la creación y autenticación de usuarios
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
const authRouter = Router();

authRouter.post('/auth', AuthController.create);
authRouter.post('/auth/login', AuthController.login);

export default authRouter;
