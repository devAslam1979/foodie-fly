import { Request, Response } from "express";
import User from "../models/user";

export const profile = async (req: Request, res: Response) => {
  try {
    // const id = req.user.id;
    const user = await User.find();
    res.status(200).json({
      success: true,
      message: "Success",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, auth0Id } = req.body;
    if (!name || !email || !auth0Id) {
      res.status(400).json({
        status: false,
        message: "All fields are required",
      });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(200).json({
        success: false,
        message: "User already exists",
      });
      return;
    }
    const newUser = new User({
      name,
      email,
      auth0Id,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
