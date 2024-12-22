import ValidateException from "../../../utils/functions/validationException.js";
import EmployeeServices from "../../employees/services/EmployeeServices.js";
import RequestDao from "../dao/RequestDao.js";

class RequestServices {
    static async getAllRequests() {
        try {
            return await RequestDao.getAllWithEmployeeName();
        } catch (error) {
            console.error(error);
            throw new ValidateException('Error al obtener las solicitudes', 500, 'error');
        }
    }

    static async getRequestById(id) {
        try {
            return await RequestDao.getById(id);
        } catch (error) {
            console.error(error);
            throw new ValidateException('Error al obtener la solicitud', 500, 'error');
        }
    }

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
            console.error(error);
            throw new ValidateException('Error al crear la solicitud', 500, 'error');
        }
    }

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
            console.error(error);
            throw new ValidateException('Error al eliminar la solicitud', 500, 'error');
        }
    }
}

export default RequestServices;