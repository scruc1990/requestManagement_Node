import db from '../../../config/database.js';

class AuthDao {
    static async create(user) {
        return await db(`${process.env.DB_SCHEMA}.usuario`).insert(user).returning('id');
    }

    static async exist(username) {
        return await db(`${process.env.DB_SCHEMA}.usuario`).where({ usuario: username }).first();
    }

    static async validate(username, password) {
        const user = await db(`${process.env.DB_SCHEMA}.usuario`).where({ usuario: username, contraseña: password }).first();

        return user ? true : false;
    }
}

export default AuthDao;