import ValidateException from '../../../utils/functions/validationException.js';
import EmployeeDao from '../dao/EmployeeDao.js';

/**
 * Clase para el manejo de la lógica de negocio de los empleados
 * 
 * @Author Cristian David Herrera
 * @date 2024-12-21
 */
class EmployeeServices {
    /**
     * Método para obtener todos los empleados
     * 
     * @returns {Promise<Object>} Objeto con la respuesta de la petición
     * 
     * @throws ValidateException Si ocurre un error al obtener los empleados
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async getAllEmployees() {
        try {

          return await EmployeeDao.getAll();

        } catch (error) {
            console.error(error);
            throw new ValidateException('Error al obtener los empleados', 500, 'error');
        }
    }

    /**
     * Método para obtener un empleado por su id
     * 
     * @param {*} id Id del empleado
     * @returns {Promise<Object>} Objeto con la respuesta de la petición
     * 
     * @throws ValidateException Si ocurre un error al obtener el empleado
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async getEmployeeById(id) {
      try {

        return await EmployeeDao.getById(id);

      } catch (error) {
          console.error(error);
          throw new ValidateException('Error al obtener el empleado', 500, 'error');
      }
    }

    /**
     * Método para crear un nuevo empleado
     * 
     * @param {*} employee Objeto con los datos del empleado
     * @returns {Promise<Object>} Objeto con la respuesta de la petición
     * 
     * @throws ValidateException Si ocurre un error al crear el empleado
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async createEmployee(employee) {
      const response = {
        success: false,
        message: 'Empleado creado correctamente',
        data: null
    }
      try {
        const existEmployee = await EmployeeDao.getById(employee.id);

        if (existEmployee) {
          response.message = 'El empleado ya existe';
          return response;
        }

        response.success = true;
        response.data = await EmployeeDao.insert(employee);

        return response;
      } catch (error) {
          console.error(error);
          throw new ValidateException('Error al crear el empleado', 500, 'error');
      }
    }

}

export default EmployeeServices;