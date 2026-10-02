import { Router } from "express";
import {
  loginValidator,
  registerValidator,
} from "../validator/auth.validator.js";
import {
  login,
  logout,
  me,
  refresh,
  register,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/authenticate.js";
import { compare } from "bcryptjs";

const router = Router();

/*
 * method:  post
 * route: /api/auth/register
 * description: register new user
 * access:  all new user
 */
router.post("/register", registerValidator, register);

/*
 * method:  post
 * route: /api/auth/login
 * description: login user to authenticate
 * access:  registered user
 */
router.post("/login", loginValidator, login);

/*
 * method:  get
 * route: /api/auth/me
 * description: for identify which user request to server
 * access: login user
 */
router.get("/me", authenticate, me);

/*
 * method:  post
 * route: /api/auth/refresh-token
 * description: when expired access token then regenerate new access and refresh token
 * access:  logging user
 */
router.post("/refresh-token", refresh);

/*
 * method: post
 * route: /api/auth/logout
 * description: remove refresh token from cookies
 * access: user
 */
router.post("/logout", authenticate, logout);

export default router;
