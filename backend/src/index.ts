import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/config";
import userRouter from "./routes/userRoute";

// load environment variables
dotenv.config();

// connect to database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRouter);

app.listen(7000, () => {
  console.log(`Server is running on port 7000`);
});
