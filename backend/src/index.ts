import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../db/config";

// load environment variables
dotenv.config();

// connect to database
connectDB();


const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.status(200).json({
    sucess: true,
    message: "Server is running",
  });
});

app.listen(7000, () => {
  console.log(`Server is running on port 7000`);
});
