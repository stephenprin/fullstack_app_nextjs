import User from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export const POST =async (req, res, next) => {
    const { name, email, password } = await req.json()
    await connect()

    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword
    }) 

    try {
        await newUser.save()
        return new NextResponse("User has been created successfully", {
            status:201
        })

    } catch (error) {
        return new NextResponse(error.message, {
            status:500
        })
    }
}