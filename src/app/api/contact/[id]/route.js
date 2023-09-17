import mongoose from "mongoose";
import Contact from "@/model/contact";
import { NextResponse } from "next/server";
import db from "@/util/mongoose";

export async function GET(request, { params }) {
  try {
    const contact = await Contact.findById(params.id);

    let json_response = {
      status: "success",
      contact,
    };
    return NextResponse.json(json_response);
  } catch (error) {
    return NextResponse.json({ msg: "Unable to send message." });
  }
}
