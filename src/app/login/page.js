"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { axios } from "axios"


export default function Login () {
    const [user, setUser ] = useState({email: "", password: ""})
    const onLogin = () => {

    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1 className="mx-auto">Login</h1>
            
            <label htmlFor="email">email</label>
            <input className="my-2" type="text" id="email" value={user.email} 
            onChange={(e) => {setUser({...user, email: e.target.value})}} />
            
            <label htmlFor="password">password</label>
            <input className="my-2" type="password" id="password" value={user.password} 
            onChange={(e) => {setUser({...user, password: e.target.value})}} />
            <button onClick={onLogin} className="bg-teal-500 rounded-xl py-2 px-4">Sign Up</button>
            <Link href="/signup" className="mt-4">Sign Up Here</Link>
        </div>
    )
}