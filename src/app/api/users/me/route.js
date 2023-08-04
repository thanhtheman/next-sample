import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import { connect } from "@/dbCongif/dbCongif";

connect()

export async function GET(request) {
    try {
        const userId = await getDataFromToken(request);
        console.log(userId)
        const user = await User.findOne({_id: userId}).select("-password") // this will exclude password
        console.log(user)
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}