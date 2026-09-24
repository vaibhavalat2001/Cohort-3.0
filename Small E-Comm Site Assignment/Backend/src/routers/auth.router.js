import { Router } from "express";
import {
  loginValidator,
  registerValidator,
} from "../validator/auth.validator.js";
import { login, me, register } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

//  ### @post   /api/auth/register
router.post("/register", registerValidator, register);

//  ### @post   /api/auth/login
router.post("/login", loginValidator, login);

//  ### @get    /api/auth/me
router.get("me", authenticate, me);

//  ### @post /api/auth/refresh-token
// router.post("refresh-token", )

export default router;
