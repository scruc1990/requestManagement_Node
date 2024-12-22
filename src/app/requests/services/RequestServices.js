import CustomException from "../../../utils/functions/CustomException.js";
import EmployeeServices from "../../employees/services/EmployeeServices.js";
import RequestDao from "../dao/RequestDao.js";

/**
 * Clase para manejar la lógica de negocio de las solicitudes
 * 
 * @Author Cristian David Herrera
 * @date 2024-12-21
 */
class RequestServices {
    /**
     * Método para obtener todas las solicitudes
     * 
     * @returns {Promise<Array>} Lista con las solicitudes
     * 
     * @throws CustomException Si ocurre un error al obtener las solicitudes
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21 
     */
    static async getAllRequests() {
        try {
            return await RequestDao.getAllWithEmployeeName();
        } catch (error) {
            
            throw new CustomException('Error al obtener las solicitudes', 500, error, 'error');
        }
    }

    /**
     * Método para obtener una solicitud por su id
     * 
     * @param {number} id Id de la solicitud
     * @returns {Promise<Object>} Objeto con los datos de la solicitud
     * 
     * @throws CustomException Si ocurre un error al obtener la solicitud
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async getRequestById(id) {
        try {
            return await RequestDao.getById(id);
        } catch (error) {
            
            throw new CustomException('Error al obtener la solicitud', 500, error, 'error');
        }
    }

    /**
     * Método para crear una nueva solicitud
     * 
     * @param {*} request Objeto con los datos de la solicitud
     * @returns {Promise<Object>} Objeto con la respuesta de la petición
     * 
     * @throws CustomException Si ocurre un error al crear la solicitud
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async createRequest(request) {
        const response = {
            success: false,
            message: 'Solicitud creada correctamente',
            data: null
        }
        try {
            const existRequest = await RequestDao.exists(request.codigo);

            if (existRequest) {
                response.message = 'La solicitud ya existe';
                return response;
            }

            const existEmployee = await EmployeeServices.getEmployeeById(request.id_empleado);

            if (!existEmployee) {
                response.message = 'El empleado no existe';
                return response;
            }

            response.success = true;
            response.data = await RequestDao.insert(request);

            return response;
        } catch (error) {
            
            throw new CustomException('Error al crear la solicitud', 500, error, 'error');
        }
    }

    /**
     * Método para eliminar una solicitud
     * 
     * @param {*} id Id de la solicitud
     * @returns {Promise<Object>} Objeto con la respuesta de la petición
     * 
     * @throws CustomException Si ocurre un error al eliminar la solicitud
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async deleteRequest(id) {
        const response = {
            success: false,
            message: 'Solicitud eliminada correctamente'
        }
        try {
            const existRequest = await RequestDao.getById(id);

            if (!existRequest) {
                response.message = 'La solicitud no existe';
                return response;
            };

            response.success = true;
            await RequestDao.delete(id);

            return response;
        } catch (error) {
            
            throw new CustomException('Error al eliminar la solicitud', 500, error, 'error');
        }
    }
}

export default RequestServices;