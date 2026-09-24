import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens } from "../utils/generateTokens.js";

//  ### @post   /api/auth/register
export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const isValidEmail = await userModel.findOne({ email });

    if (isValidEmail) {
      return res.status(409).json({
        message: "user already exist of this email address",
        errors: {
          path: "email",
          msg: "user already exist of this email address",
        },
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "password and confirm password field not matched",
        errors: {
          path: "password",
          msg: "password and confirm password field not matched",
        },
      });
    }

    const user = await userModel.create({
      name,
      email,
      passwordHash: await bcrypt.hash(password, 13),
    });

    return res.status(201).json({
      message: "user registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong on register api",
    });
  }
};

//  ### @post   /api/auth/login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "invalid email or password",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);

    if (!isValidPassword) {
      return res.status(401).json({
        message: "invalid email or password",
      });
    }

    const { accessToken, refreshToken } = generateTokens(user._id);

    await userModel.findByIdAndUpdate(user._id, { refreshToken });

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(200).json({
      message: "user logging successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong on login api",
    });
  }
};

//  ### @get    /api/auth/me
export const me = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(400).json({
        message: "user not matched",
      });
    }

    return res.status(200).json({
      message: "user fetched successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong in me api",
    });
  }
};


//  ### @post   /api/auth/refresh-token
