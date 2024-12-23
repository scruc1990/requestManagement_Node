import asyncHandler from '../../../utils/functions/asyncHandler.js';
import schemaValidate from '../../../utils/functions/schemaValidate.js';
import RequestServices from '../services/RequestServices.js';
import Joi from 'joi';

/**
 * Clase para el controlador de las peticiones para solicitudes
 *
 * @Author Cristian David Herrera
 * @date 2024-12-21
 */
class RequestController {
  /**
   * Método para obtener todas las solicitudes
   *
   * @param {Request} _ Objeto de petición
   * @param {Response} res Objeto de respuesta
   * @returns {Promise<Response>} Respuesta de la petición
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static getRequests = asyncHandler(async (_, res) => {
    const requests = await RequestServices.getAllRequests();
    return res.status(200).json({
      success: true,
      message: 'Solicitudes obtenidas correctamente',
      data: requests
    });
  });

  /**
   * Método para obtener una solicitud por su id
   *
   * @param {Request} req Objeto de petición
   * @param {Response} res Objeto de respuesta
   * @returns {Promise<Response>} Respuesta de la petición
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static getRequestById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const value = schemaValidate({ id: Joi.number().required() }, { id });

    const request = await RequestServices.getRequestById(value.id);
    return res.status(200).json({
      success: true,
      message: 'Solicitud obtenida correctamente',
      data: request
    });
  });

  /**
   * Método para crear una nueva solicitud
   *
   * @param {Request} req Objeto de petición
   * @param {Response} res Objeto de respuesta
   * @returns {Promise<Response>} Respuesta de la petición
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static createRequest = asyncHandler(async (req, res) => {
    const request = req.body;

    const value = schemaValidate(
      {
        codigo: Joi.string().max(50).required(),
        descripcion: Joi.string().max(50).required(),
        resumen: Joi.string().max(50).required(),
        id_empleado: Joi.number().positive().max(9999999999).required()
      },
      request
    );

    const newRequest = await RequestServices.createRequest(value);
    return res.status(201).json(newRequest);
  });

  /**
   * Método para eliminar una solicitud
   *
   * @param {Request} req Objeto de petición
   * @param {Response} res Objeto de respuesta
   * @returns {Promise<Response>} Respuesta de la petición
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static deleteRequest = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const value = schemaValidate({ id: Joi.number().required() }, { id });

    const deleted = await RequestServices.deleteRequest(value.id);
    return res.status(200).json(deleted);
  });
}

export default RequestController;
