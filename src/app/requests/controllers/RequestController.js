import asyncHandler from "../../../utils/functions/asyncHandler.js";
import schemaValidate from "../../../utils/functions/schemaValidate.js";
import RequestServices from "../services/RequestServices.js";
import Joi from 'joi';

class RequestController {
    static getRequests = asyncHandler(async ( _, res) => {
        const requests = await RequestServices.getAllRequests();
        return res.status(200).json({
            success: true,
            message: 'Solicitudes obtenidas correctamente',
            data: requests
        });
    });

    static getRequestById = asyncHandler(async (req, res) => {
        const { id } = req.params;

        const value =  schemaValidate({ id: Joi.number().required() }, { id });
        
        const request = await RequestServices.getRequestById(value.id);
        return res.status(200).json({
            success: true,
            message: 'Solicitud obtenida correctamente',
            data: request
        });
    });

    static createRequest = asyncHandler(async (req, res) => {
        const request = req.body;

        const value = schemaValidate({
            codigo: Joi.string().max(50).required(),
            descripcion: Joi.string().max(50).required(),
            resumen: Joi.string().max(50).required(),
            id_empleado: Joi.number().required()
        }, request);

        const newRequest = await RequestServices.createRequest(value);
        return res.status(201).json(newRequest);
    });

    static deleteRequest = asyncHandler(async (req, res) => {
        const { id } = req.params;

        const value = schemaValidate({ id: Joi.number().required() }, { id });
        
        const deleted = await RequestServices.deleteRequest(value.id);
        return res.status(200).json(deleted);
    });
}

export default RequestController;