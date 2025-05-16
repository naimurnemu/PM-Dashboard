import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

try {
  mongoose.connect(MONGO_URL).then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("MongoDB connection error:", error);
}
