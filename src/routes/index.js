import employeeRouter from './employee.routes.js';
import requestRouter from './request.routes.js';
/**
 * Archivo barril para las rutas de la aplicación que use el middleware de jwt
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
const router = [employeeRouter, requestRouter];

export default router;
