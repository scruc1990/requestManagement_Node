import db from '../../../config/database.js';

/**
 * Clase para el acceso a la base de datos para el control de la autenticación de un usuario
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
class AuthDao {
  /**
   * Método para crear un nuevo usuario
   *
   * @param {Object} user Objeto con los datos del usuario
   * @returns {Promise<number>} Id del usuario creado
   *
   * @author Cristian David Herrera
   * @date 2024-12-21
   */
  static async create(user) {
    return await db(`${process.env.DB_SCHEMA}.usuario`).insert(user).returning('id');
  }

  /**
   * Método para verificar si un usuario ya existe
   *
   * @param {*} username Nombre de usuario
   * @returns {Promise<Object>} Objeto con los datos del usuario
   *
   * @author Cristian David Herrera
   * @date 2024-12-21
   */
  static async exist(username) {
    return await db(`${process.env.DB_SCHEMA}.usuario`).where({ usuario: username }).first();
  }

  /**
   * Método para validar las credenciales de un usuario
   *
   * @param {*} username Nombre de usuario
   * @param {*} password Contraseña del usuario
   * @returns {Promise<boolean>} Verdadero si las credenciales son correctas, falso en caso contrario
   *
   * @author Cristian David Herrera
   * @date 2024-12-21
   */
  static async validate(username, password) {
    const user = await db(`${process.env.DB_SCHEMA}.usuario`)
      .where({ usuario: username, contraseña: password })
      .first();

    return user ? true : false;
  }
}

export default AuthDao;
