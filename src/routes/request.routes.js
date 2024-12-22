import { Router } from 'express';
import RequestController from '../app/requests/controllers/RequestController.js';

const requestRouter = Router();

requestRouter.get('/request', RequestController.getRequests);
requestRouter.get('/request/:id', RequestController.getRequestById);
requestRouter.post('/request', RequestController.createRequest);
requestRouter.delete('/request/:id', RequestController.deleteRequest);

export default requestRouter;