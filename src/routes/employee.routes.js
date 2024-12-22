import { Router } from "express";
import EmployeeController from "../app/employees/controllers/EmployeeController.js";

/**
 * Rutas para la gestión de empleados
 * 
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
const employeeRouter = Router();

employeeRouter.get("/employee", EmployeeController.getEmployee);
employeeRouter.get("/employee/:id", EmployeeController.getEmployeeById);
employeeRouter.post("/employee", EmployeeController.createEmployee);

export default employeeRouter;