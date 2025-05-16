import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/productController.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";
const ProductRouter = express.Router();

ProductRouter.get("/", authenticateUser, getAllProducts);
ProductRouter.post("/", authenticateUser, createProduct);
ProductRouter.put("/:id", authenticateUser, updateProduct);
ProductRouter.delete("/:id", authenticateUser, deleteProduct);

export default ProductRouter;
