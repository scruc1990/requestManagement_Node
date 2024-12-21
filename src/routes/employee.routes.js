import { Router } from "express";
import employeeControler from "../app/controllers/employeeControler.js";

const employeeRouter = Router();

employeeRouter.get("/employee", employeeControler.getEmployee);
employeeRouter.get("/employee/:id", employeeControler.getEmployeeById);
employeeRouter.post("/employee", employeeControler.createEmployee);

export default employeeRouter;