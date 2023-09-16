
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/util/mongodb";
import Contact from "@/components/contactModeule";

export async function POST(req) {
    console.log(req);
  const { name, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ name, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}