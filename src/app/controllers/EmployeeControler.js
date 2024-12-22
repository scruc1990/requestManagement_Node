import asyncHandler from '../../utils/functions/asyncHandler.js';
import EmployeeServices from '../services/EmployeeServices.js';

class EmployeeControler {
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
        // Implementar validacion de datos
        const employee = await EmployeeServices.getEmployeeById(id);
        return res.status(200).json({
            success: true,
            message: 'Empleado obtenido correctamente',
            data: employee
        });
    });

    static createEmployee = asyncHandler(async (req, res) => {
        const employee = req.body;
        // Implementar validacion de datos
        const newEmployee = await EmployeeServices.createEmployee(employee);
        return res.status(201).json({
            success: true,
            message: 'Empleado creado correctamente',
            data: newEmployee
        });
    });
}

export default EmployeeControler;