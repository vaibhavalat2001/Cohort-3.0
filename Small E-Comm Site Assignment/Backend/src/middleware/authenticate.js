import { verifyAccessToken } from "../utils/generateTokens.js";

export const authenticate = async (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    return res.status(400).json({
      message: "access token required",
    });
  }

  try {
    const decoded = verifyAccessToken(accessToken);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "invalid or expired access token",
    });
  }
};
