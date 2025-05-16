import User from "../models/user.js";
import { verifyToken } from "../utils/handleTokes.js";

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader.startsWith("Bearer ")) {
    try {
      const token = authHeader.split(" ")[1];
      const userId = verifyToken(token);
      const user = await User.findById(userId);
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
};

export { authenticateUser };
