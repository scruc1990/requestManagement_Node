import AuthDao from "../dao/AuthDao.js";
import ValidateException from "../../../utils/functions/validationException.js";
import jwt from 'jsonwebtoken';
import value from "../../../config/env.js";

/**
 * Clase para la lógica de negocio sobre la autenticación de un usuario
 * 
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
class AuthServices {
    /**
     * Método para crear un nuevo usuario
     * 
     * @param {*} user Objeto con los datos del usuario 
     * @returns {Promise<Object>} Objeto con la respuesta de la petición
     * 
     * @throws ValidateException Si ocurre un error al crear el usuario
     * @author Cristian David Herrera
     * @date 2024-12-21
     */
    static async create(user) {
        const response = {
            success: false,
            message: 'Usuario creado correctamente'
        }
        try {
            const existUser = await AuthDao.exist(user.usuario);

            if (existUser) {
                response.message = 'El usuario ya existe';
                return response;
            }

            response.success = true;
            response.data = await AuthDao.create(user);

            return response;
        } catch (error) {
            console.error(error);
            throw new ValidateException('Error al crear el usuario', 500, 'error');
        }
    }

    /**
     * Método para autenticar un usuario
     * 
     * @param {*} param0 Objeto con los datos del usuario
     * @returns {Promise<Object>} Objeto con la respuesta de la petición
     * 
     * @throws ValidateException Si ocurre un error al iniciar sesión
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async Login({ usuario, contraseña }) {
        const response = {
            success: false,
            message: 'Usuario o contraseña incorrectos'
        }
        try {
            const user = await AuthDao.validate(usuario, contraseña);

            if (user) {
                response.success = true;
                response.message = 'Inicio de sesión correcto';
                response.token = jwt.sign({ usuario }, value.SECRET_KEY, { expiresIn: '1h' });
            }

            return response;
        } catch (error) {
            console.error(error);
            throw new ValidateException('Error al iniciar sesión', 500, 'error');
        }
    }
}

export default AuthServices;