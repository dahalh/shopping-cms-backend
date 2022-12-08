import express from "express";
import { encryptPassword } from "../helpers/bcrypthelper.js";
import { newAdminValidation } from "../middlewares/joi-validation/adminValidation.js";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

import {
  getAdmin,
  insertAdmin,
  updateAdmin,
} from "../models/admin/Admin.model.js";

// new admin register
router.post("/", newAdminValidation, async (req, res, next) => {
  try {
    const hashPassword = encryptPassword(req.body.password);
    req.body.password = hashPassword;

    // create unique email verification code
    req.body.emailValidationCode = uuidv4();

    const result = await insertAdmin(req.body);
    console.log(result);
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
