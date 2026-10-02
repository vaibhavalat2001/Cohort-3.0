import jwt from "jsonwebtoken";
import config from "../config/config.js";

// generate access and refresh token
export const generateTokens = (id) => {
  const accessToken = jwt.sign({ id }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "1day",
  });

  const refreshToken = jwt.sign({ id }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: "7day",
  });

  return { accessToken, refreshToken };
};

// verify access token
export const verifyAccessToken = (accessToken) => {
  const decoded = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET);
  return decoded;
};

// verify refresh token
export const verifyRefreshToken = (refreshToken) => {
  const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);

  return decoded;
};
