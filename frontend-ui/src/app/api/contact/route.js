import mongoose from "mongoose";
import Contact from "@/model/contact";
import { NextResponse } from "next/server";
import db from "@/util/mongoose";

export const POST = async (req, res) => {
  console.log(req);
  try {
    const { fullname, email, phone, message } = await req.json();
    await db.connect();
    await Contact.create({ fullname, email, phone, message });
    return NextResponse.json(
      {
        message: "form submit successfully",
        statusCode: 200,
        status: "success",
      },
      {
        status: 201,
      }
    );
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
};

export async function GET(request) {
  const page_str = request.nextUrl.searchParams.get("page");
  const limit_str = request.nextUrl.searchParams.get("limit");

  const page = page_str ? parseInt(page_str, 10) : 1;
  const limit = limit_str ? parseInt(limit_str, 10) : 10;
  const skip = (page - 1) * limit;

  const contacts = await Contact.find({
    // skip,
    // take: limit,
  });

  let json_response = {
    status: "success",
    results: contacts.length,
    contacts,
  };
  return NextResponse.json(json_response);
}
