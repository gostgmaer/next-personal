// pages/api/auth/login.js
import User from "@/model/auth";
import bcrypt from "bcrypt";
import db from "@/util/mongoose";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const POST = async (req, res) => {
 

  try {
    const { username, password } = req.body;
     console.log(req.body);
    await db.connect();
    const user = await User.findOne({ username });
  } catch (error) {
    console.log(error);
  }
};
