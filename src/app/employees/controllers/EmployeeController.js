import asyncHandler from '../../../utils/functions/asyncHandler.js';
import schemaValidate from '../../../utils/functions/schemaValidate.js';
import EmployeeServices from '../services/EmployeeServices.js';
import Joi from 'joi';

/**
 * Clase para el controlar las peticiones hacia empleados
 *
 * @Author Cristian David Herrera
 * @date 2024-12-21
 */
class EmployeeController {
  /**
   * Método para obtener todos los empleados
   *
   * @param {Request} _ Objeto de petición
   * @param {Response} res Objeto de respuesta
   * @returns {Promise<Response>} Respuesta de la petición
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static getEmployee = asyncHandler(async (_, res) => {
    const employees = await EmployeeServices.getAllEmployees();
    return res.status(200).json({
      success: true,
      message: 'Empleados obtenidos correctamente',
      data: employees
    });
  });

  /**
   * Método para obtener un empleado por su id
   *
   * @param {Request} req Objeto de petición
   * @param {Response} res Objeto de respuesta
   * @returns {Promise<Response>} Respuesta de la petición
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static getEmployeeById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const value = schemaValidate({ id: Joi.number().required() }, { id });

    const employee = await EmployeeServices.getEmployeeById(value.id);
    return res.status(200).json({
      success: true,
      message: 'Empleado obtenido correctamente',
      data: employee
    });
  });

  /**
   * Método para crear un nuevo empleado
   *
   * @param {Request} req Objeto de petición
   * @param {Response} res Objeto de respuesta
   * @returns {Promise<Response>} Respuesta de la petición
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static createEmployee = asyncHandler(async (req, res) => {
    const employee = req.body;

    const value = schemaValidate(
      {
        id: Joi.number().positive().max(9999999999).required(),
        fecha_ingreso: Joi.date().max('now').required(),
        nombre: Joi.string().max(50).required(),
        salario: Joi.number().positive().required()
      },
      employee
    );

    const newEmployee = await EmployeeServices.createEmployee(value);
    return res.status(201).json(newEmployee);
  });
}

export default EmployeeController;
