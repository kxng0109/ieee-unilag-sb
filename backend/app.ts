import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middleware/error";
import newsletterRoutes from "./routes/newsletter";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/newsletter", newsletterRoutes);

app.get("/", (_req, res) => {
  res.status(200).json({ status: "UP", message: "Backend is running..." });
});

app.use(errorHandler);

export default app;
