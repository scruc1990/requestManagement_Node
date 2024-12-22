import { Router } from "express";
import EmployeeControler from "../app/controllers/EmployeeControler.js";

const employeeRouter = Router();

employeeRouter.get("/employee", EmployeeControler.getEmployee);
employeeRouter.get("/employee/:id", EmployeeControler.getEmployeeById);
employeeRouter.post("/employee", EmployeeControler.createEmployee);

export default employeeRouter;