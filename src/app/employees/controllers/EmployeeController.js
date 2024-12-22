import asyncHandler from '../../../utils/functions/asyncHandler.js';
import schemaValidate from '../../../utils/functions/schemaValidate.js';
import EmployeeServices from '../services/EmployeeServices.js';
import Joi from 'joi';

class EmployeeController {
    static getEmployee = asyncHandler(async ( _, res) => {
        const employees = await EmployeeServices.getAllEmployees();
        return res.status(200).json({
            success: true,
            message: 'Empleados obtenidos correctamente',
            data: employees
        });
    });

    static getEmployeeById = asyncHandler(async (req, res) => {
        const { id } = req.params;

        const value =  schemaValidate({ id: Joi.number().required() }, { id });
        
        const employee = await EmployeeServices.getEmployeeById(value.id);
        return res.status(200).json({
            success: true,
            message: 'Empleado obtenido correctamente',
            data: employee
        });
    });

    static createEmployee = asyncHandler(async (req, res) => {
        const employee = req.body;

        const value = schemaValidate({
            id: Joi.number().required(),
            fecha_ingreso: Joi.date().required(),
            nombre: Joi.string().max(50).required(),
            salario: Joi.number().required()
        }, employee);

        const newEmployee = await EmployeeServices.createEmployee(value);
        return res.status(201).json(newEmployee);
    });
}

export default EmployeeController;