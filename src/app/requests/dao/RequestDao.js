import db from '../../../config/database.js';

/**
 * Clase para el acceso a la base de datos para el control de las solicitudes
 * 
 * @Author Cristian David Herrera
 * @date 2024-12-21
 */
class RequestDao {
    /**
     * Método para crear una solicitud
     * 
     * @returns {Promise<Array>} Solicitud creada
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async insert(request) {
        return await db(`${process.env.DB_SCHEMA}.solicitud`).insert(request).returning('*');
    }

    /**
     * Método para obtener una solicitud por su id
     * 
     * @param {*} id Id de la solicitud 
     * @returns {Promise<Object>} Solicitud obtenida
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async getById(id) {
        const request = await db(`${process.env.DB_SCHEMA}.solicitud as s`)
            .join(`${process.env.DB_SCHEMA}.empleado as e`, 's.id_empleado', 'e.id')
            .select('s.*', 'e.nombre as nombre')
            .where('s.id', id)
            .first();
        return request || null;
    }

    /**
     * Método para obtener todas las solicitudes
     * 
     * @returns {Promise<Array>} Lista de solicitudes
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async getAllWithEmployeeName() {
        return await db(`${process.env.DB_SCHEMA}.solicitud as s`)
            .join(`${process.env.DB_SCHEMA}.empleado as e`, 's.id_empleado', 'e.id')
            .select('s.*', 'e.nombre as nombre');
    }

    /**
     * Método para eliminar una solicitud
     * 
     * @param {*} id Id de la solicitud
     * @returns {Promise<number>} Número de filas afectadas
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async delete(id) {
        return await db(`${process.env.DB_SCHEMA}.solicitud`).where('id', id).delete();
    }

    /**
     * Método para verificar si una solicitud ya existe
     * 
     * @param {*} code Código de la solicitud
     * @returns {Promise<boolean>} Verdadero si la solicitud existe, falso en caso contrario
     * 
     * @Author Cristian David Herrera
     * @date 2024-12-21
     */
    static async exists(code) {
        const request = await db(`${process.env.DB_SCHEMA}.solicitud`).where('codigo', code).first();
        return request ? true : false;
    }
}

export default RequestDao;