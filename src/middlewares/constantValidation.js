import Joi from "joi";

export const FNAME = Joi.string().required().min(3).max(30);
export const LNAME = Joi.string().required().min(3).max(30);
export const EMAIL = Joi.string().email({ minDomainSegments: 2 }).required();
export const PHONE = Joi.string().required().min(10).max(10);
export const DOB = Joi.date().allow(null);
export const ADDRESS = Joi.string().allow(null).allow("");
export const PASSWORD = Joi.string().required();

export const validator = (schema, req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    error.status = 200;
    return next(error);
  }
  next();
};
