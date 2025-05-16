import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN || "30d";

const generateToken = (id) => {
  return jwt.sign({ id }, secret, { expiresIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

export { generateToken, verifyToken };
