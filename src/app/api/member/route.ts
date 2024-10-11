import ConnectDB from "@/config/db";
import UserModel from "@/schema/user.schema";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest, response: NextResponse) => {
    try {
        await ConnectDB();
        const users = await UserModel.find({});
        if (users) {
            return NextResponse.json({ message: "Get Users", data: users.length }, { status: 200 });
        }
        NextResponse.json({message: "Bad Request"}, { status : 400 });
    } catch (error) {
        NextResponse.json({message: "Bad Request"}, { status : 500 });
    }
}