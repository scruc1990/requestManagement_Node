import { Router } from 'express';
import RequestController from '../app/requests/controllers/RequestController.js';

/**
 * Rutas para la gestión de solicitudes
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
const requestRouter = Router();

requestRouter.get('/request', RequestController.getRequests);
requestRouter.get('/request/:id', RequestController.getRequestById);
requestRouter.post('/request', RequestController.createRequest);
requestRouter.delete('/request/:id', RequestController.deleteRequest);

export default requestRouter;
