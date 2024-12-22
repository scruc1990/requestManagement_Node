import { expressjwt as jwt } from "express-jwt";
import value from "../config/env.js";

const secretKey = value.SECRET_KEY;

const jwtMiddleware = jwt({
    secret: secretKey,
    algorithms: ["HS256"],
});

export default jwtMiddleware;