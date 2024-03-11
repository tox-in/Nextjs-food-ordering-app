import mongoose from "mongoose";
import { User } from "../../models/User";
import dotenv from "dotenv"
import { NextResponse } from "next/server";

dotenv.config();

export const POST=async(req) =>{
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);
   
    try {
        const createdUser = await User.create(body);
        return new NextResponse(JSON.stringify(createdUser))
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({message:"something went wrong"}))
        
    }
}