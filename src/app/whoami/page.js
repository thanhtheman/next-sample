"use client";
import axios from "axios";
import {useState} from 'react';

export default function Whoami () {
    const [userEmail, setUserEmail] = useState('')
    const getMe = async () => {
        const res = await axios.get('/api/users/me')            
        console.log(res.data)
        setUserEmail(res.data.data._id)
    }

    return  (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1>This is who I am</h1>
        <hr />
        <button
        onClick={getMe}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Get Me</button>
        <h1>my email is {userEmail}</h1>
        </div>
    )
}