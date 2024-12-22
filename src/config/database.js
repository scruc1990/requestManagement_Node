import knex from 'knex';
import knexConfig from '../../knexfile.js';

/**
 * Configuración de la conexión a la base de datos
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
const db = knex(knexConfig['development']);

export default db;
