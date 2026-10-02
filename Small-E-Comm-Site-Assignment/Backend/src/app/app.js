import express from "express";
import authRouter from "../routers/auth.router.js";
import productsRouter from "../routers/products.router.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);

export default app;
