/** Dependencies */
// @hapi/joi validation
const joi = require('@hapi/joi')

// register validation scheme
const registerValidation = data => {
    
    // validation Scheme
    const schema = joi.object({
        email: joi
            .string()
            .min(6)
            .required()
            .email(),
        password: joi
            .string()
            .min(6)
            .max(72, 'utf8') // cause using bcrypt has limitation of password length to (72bit) or around 50 chars (just to make sure it will not go beyond that length)
            .required(),
        passwordConfirm: joi
            .valid(joi.ref('password'))
            .required(),
        firstName: joi
            .string()
            .min(4)
            .required(),
        lastName: joi
            .string()
            .min(4)
            .required()
    })

    // validation
    return schema.validate(data)
}

/** Module Exports */
module.exports = {
    registerValidation
}