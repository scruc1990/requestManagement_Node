import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config({ path: '.env' });

const envVarsSchema = Joi.object({
    PORT: Joi.number().port().default(3000),
    DB_PORT: Joi.number().default(5432),
    DB_HOST: Joi.string().required().description('Database host name'),
    DB_USER: Joi.string().required().description('Database user name'),
    DB_PASSWORD: Joi.string().required().description('Database password'),
    DB_DATABASE: Joi.string().required().description('Database name'),
    DB_SCHEMA: Joi.string().required().description('Database schema name'),
    SECRET_KEY: Joi.string().required().description('Secret key para JWT')
}).unknown();

const { error, value } = envVarsSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export default value;