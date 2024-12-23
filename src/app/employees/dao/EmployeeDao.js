import db from '../../../config/database.js';

/**
 * Clase para el acceso a la base de datos para el control de los empleados
 *
 * @Author Cristian David Herrera
 * @date 2024-12-21
 */
class EmployeeDao {
  /**
   * Método para insertar un nuevo empleado
   *
   * @param {*} employee Objeto con los datos del empleado
   * @returns {Promise<Object>} Objeto con los datos del empleado creado
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static async insert(employee) {
    return await db(`${process.env.DB_SCHEMA}.empleado`).insert(employee).returning('*');
  }

  /**
   * Método para obtener un empleado por su id
   *
   * @param {*} id Id del empleado
   * @returns {Promise<Object>} Objeto con los datos del empleado
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static async getById(id) {
    const employee = await db(`${process.env.DB_SCHEMA}.empleado`).where('id', id).first();
    return employee || null;
  }

  /**
   * Método para obtener todos los empleados
   *
   * @returns {Promise<Array>} Arreglo con los datos de los empleados
   *
   * @Author Cristian David Herrera
   * @date 2024-12-21
   */
  static async getAll() {
    const employees = await db(`${process.env.DB_SCHEMA}.empleado`).select();

    return employees.map((employee) => ({
      ...employee,
      fecha_ingreso: new Date(employee.fecha_ingreso).toISOString().split('T')[0]
    }));
  }
}

export default EmployeeDao;
