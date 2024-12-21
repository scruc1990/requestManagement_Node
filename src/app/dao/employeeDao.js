import db from '../../config/database.js';

class employeeDao {

    static async insert(employee) {
        return await db(`${process.env.DB_SCHEMA}.empleado`).insert(employee).returning('*');
    }
    
    static async getById(id) {
        const employee = await db(`${process.env.DB_SCHEMA}.empleado`).where('id', id).first();
        return employee || null;
    }

    static async getAll() {
        return await db(`${process.env.DB_SCHEMA}.empleado`).select();
    }

}

export default employeeDao;