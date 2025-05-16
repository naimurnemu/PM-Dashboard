import express from "express";
import {
  getUserProfile,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";
const UserRouter = express.Router();

UserRouter.post("/register", registerUser);
UserRouter.post("/login", loginUser);
UserRouter.get("/profile", authenticateUser, getUserProfile);

export default UserRouter;
