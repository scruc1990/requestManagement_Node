import ValidateException from '../../utils/functions/validationException.js';
import employeeDao from '../daO/employeeDao.js';

class employeeServices {
    static async getAllEmployees() {
        try {

          return await employeeDao.getAll();

        } catch (error) {
            console.error(error);
            throw new ValidateException('Error al obtener los empleados', 500, 'error');
        }
    }

    static async getEmployeeById(id) {
      try {

        return await employeeDao.getById(id);

      } catch (error) {
          console.error(error);
          throw new ValidateException('Error al obtener el empleado', 500, 'error');
      }
    }

    static async createEmployee(employee) {
      try {
        const existEmployee = await employeeDao.getById(employee.id);

        if (existEmployee) {
          throw new ValidateException('El empleado ya existe', 400, 'error');
        }

        return await employeeDao.insert(employee);
      } catch (error) {
          console.error(error);
          throw new ValidateException('Error al crear el empleado', 500, 'error');
      }
    }
}

export default employeeServices;