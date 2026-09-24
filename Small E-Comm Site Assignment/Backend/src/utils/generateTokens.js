import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const generateTokens = (id) => {
  const accessToken = jwt.sign({ id }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ id }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: "7day",
  });

  return { accessToken, refreshToken };
};

export const verifyAccessToken = (accessToken) => {
  const decoded = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET);
  return decoded;
};
