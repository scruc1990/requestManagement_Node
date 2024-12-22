import db from '../../../config/database.js';

class RequestDao {
    static async insert(request) {
        return await db(`${process.env.DB_SCHEMA}.solicitud`).insert(request).returning('*');
    }

    static async getById(id) {
        const request = await db(`${process.env.DB_SCHEMA}.solicitud as s`)
            .join(`${process.env.DB_SCHEMA}.empleado as e`, 's.id_empleado', 'e.id')
            .select('s.*', 'e.nombre as nombre')
            .where('s.id', id)
            .first();
        return request || null;
    }

    static async getAllWithEmployeeName() {
        return await db(`${process.env.DB_SCHEMA}.solicitud as s`)
            .join(`${process.env.DB_SCHEMA}.empleado as e`, 's.id_empleado', 'e.id')
            .select('s.*', 'e.nombre as nombre');
    }

    static async delete(id) {
        return await db(`${process.env.DB_SCHEMA}.solicitud`).where('id', id).delete();
    }

    static async exists(code) {
        const request = await db(`${process.env.DB_SCHEMA}.solicitud`).where('codigo', code).first();
        return request ? true : false;
    }
}

export default RequestDao;