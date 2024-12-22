import asyncHandler from '../../../utils/functions/asyncHandler.js';
import schemaValidate from '../../../utils/functions/schemaValidate.js';
import AuthServices from '../services/AuthServices.js';
import Joi from 'joi';

class AuthController {
  static create = asyncHandler(async (req, res) => {
    const user = req.body;

    const value = schemaValidate({
      usuario: Joi.string().max(50).required(),
      contraseña: Joi.string().max(50).required()
    }, user);

    const newUser = await AuthServices.create(value);
    return res.status(201).json(newUser);
  });

  static login = asyncHandler(async (req, res) => {
    const { usuario, contraseña } = req.body;

    const value = schemaValidate({
        usuario: Joi.string().max(50).required(),
        contraseña: Joi.string().max(50).required()
    }, { usuario, contraseña });

    const response = await AuthServices.Login(value);
    return res.status(200).json(response);
  });
}

export default AuthController;