import Joi from "joi";

export const carValidators = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s-]{1,20}$/u).required().messages({
        "string.pattern.base": 'Only chars allowed',
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        "string.min": 'min is 1990',
        "string.max": 'max is 2024',
    }),
    price:Joi.number().min(1).max(1000000).required().messages({
        "string.min": 'min is 1',
        "string.max": 'max is 1000000',
    })

})