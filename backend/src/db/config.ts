import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
      dbName: process.env.DB_NAME,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error while connecting to DB", error);
  }
};

export default connectDB;
