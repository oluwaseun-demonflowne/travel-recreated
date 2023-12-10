import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";




export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {email,firstName, password} = body;
        const existingUserByEmail = await prisma.user.findUnique({
            where: {email}
        })
        if(existingUserByEmail) {
            return NextResponse.json(
                {user:null,message:"User with this email already exists"}, 
                {status: 409}
            )
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await prisma.user.create({
            data: {
                email,
                firstName,
                password:hashedPassword,
            }
        })

        return NextResponse.json(
            {user: newUser, message:"User created successfully"},
            {status:201}
        )
    } catch (error) {
        return NextResponse.json(
            {message:"Something went wrong"}, 
            {status: 500}
        )
    }
}


