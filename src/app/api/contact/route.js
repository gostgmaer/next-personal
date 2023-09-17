import mongoose from "mongoose";
import Contact from '@/model/contact';
import { NextResponse } from "next/server";
import db from "@/util/mongoose";

export const POST = async (req,res)=>{
  console.log(req);
    try {
        const {fullname, email, phone, message} = await req.json();
        await db.connect();
        await Contact.create({fullname, email, phone, message})
        return NextResponse.json({
            message:"form submit successfully",
            statusCode:200,
            "status":"success",
            
        },
        {
            status:201
        })
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