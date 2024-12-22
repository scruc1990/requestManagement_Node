import { Router } from "express";
import EmployeeController from "../app/employees/controllers/EmployeeController.js";

const employeeRouter = Router();

employeeRouter.get("/employee", EmployeeController.getEmployee);
employeeRouter.get("/employee/:id", EmployeeController.getEmployeeById);
employeeRouter.post("/employee", EmployeeController.createEmployee);

export default employeeRouter;