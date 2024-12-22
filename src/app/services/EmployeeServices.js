import ValidateException from '../../utils/functions/validationException.js';
import EmployeeDao from '../dao/EmployeeDao.js';

class EmployeeServices {
    static async getAllEmployees() {
        try {

          return await EmployeeDao.getAll();

        } catch (error) {
            console.error(error);
            throw new ValidateException('Error al obtener los empleados', 500, 'error');
        }
    }

    static async getEmployeeById(id) {
      try {

        return await EmployeeDao.getById(id);

      } catch (error) {
          console.error(error);
          throw new ValidateException('Error al obtener el empleado', 500, 'error');
      }
    }

    static async createEmployee(employee) {
      try {
        const existEmployee = await EmployeeDao.getById(employee.id);

        if (existEmployee) {
          throw new ValidateException('El empleado ya existe', 400, 'error');
        }

        return await EmployeeDao.insert(employee);
      } catch (error) {
          console.error(error);
          throw new ValidateException('Error al crear el empleado', 500, 'error');
      }
    }
}

export default EmployeeServices;