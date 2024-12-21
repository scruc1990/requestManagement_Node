import joi from 'joi';
import ValidateException from './validationException.js';

const schemaValidate = (validations, body, type = 'validation') => {
    const schema = joi.object(validations);

    const { error, value } = schema.validate(body);

    if (error) throw new ValidateException(error.details[0].message, 400, type);
    
    return value;
};

export default schemaValidate;