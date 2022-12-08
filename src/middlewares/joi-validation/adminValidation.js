import Joi from "joi";

import {
  FNAME,
  LNAME,
  EMAIL,
  PHONE,
  DOB,
  ADDRESS,
  PASSWORD,
  validator,
} from "../constantValidation.js";

export const newAdminValidation = (req, res, next) => {
  const schema = Joi.object({
    fName: FNAME,
    lName: LNAME,
    email: EMAIL,
    phone: PHONE,
    dob: DOB,
    address: ADDRESS,
    password: PASSWORD,
  });

  validator(schema, req, res, next);
};
