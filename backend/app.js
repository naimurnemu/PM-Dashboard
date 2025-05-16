import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to PM Dashboard",
    status: 200,
    resources: ["users", "products"],
  });
});

app.use((req, res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).send(error.message);
  }
  res.status(500).send("Something went wrong");
});

export default app;
