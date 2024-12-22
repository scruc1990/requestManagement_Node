import { Router } from "express";
import AuthController from "../app/auth/controllers/AuthController.js";

const authRouter = Router();

authRouter.post("/auth", AuthController.create);
authRouter.post("/auth/login", AuthController.login);

export default authRouter;