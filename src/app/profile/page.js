
"use client";
import axios from "axios";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function ProfilePage () {
    const router = useRouter()
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error) {
            console.log(error.message);
        }
    }

    return  (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1>This is the general profile page</h1>
        <hr />
        <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button>
        </div>
    )
}