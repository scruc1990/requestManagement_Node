import asyncHandler from '../../../utils/functions/asyncHandler.js';
import schemaValidate from '../../../utils/functions/schemaValidate.js';
import AuthServices from '../services/AuthServices.js';
import Joi from 'joi';

/**
 * Clase para el controlador de autenticación de usuarios y la creación de nuevos usuarios
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
class AuthController {
  /**
   * Método para crear un nuevo usuario
   *
   * @param {Request} req Objeto de petición
   * @param {Response} res Objeto de respuesta
   * @returns {Promise<Response>} Respuesta de la petición
   *
   * @author Cristian David Herrera
   * @date 2024-12-21
   */
  static create = asyncHandler(async (req, res) => {
    const user = req.body;

    const value = schemaValidate(
      {
        usuario: Joi.string().max(50).required(),
        contraseña: Joi.string().max(50).required()
      },
      user
    );

    const newUser = await AuthServices.create(value);
    return res.status(201).json(newUser);
  });

  /**
   * Método para autenticar un usuario
   *
   * @param {Request} req Objeto de petición
   * @param {Response} res Objeto de respuesta
   * @returns {Promise<Response>} Respuesta de la petición
   *
   * @author Cristian David Herrera
   * @date 2024-12-21
   */
  static login = asyncHandler(async (req, res) => {
    const { usuario, contraseña } = req.body;

    const value = schemaValidate(
      {
        usuario: Joi.string().max(50).required(),
        contraseña: Joi.string().max(50).required()
      },
      { usuario, contraseña }
    );

    const response = await AuthServices.Login(value);
    return res.status(200).json(response);
  });
}

export default AuthController;
