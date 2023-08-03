"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { axios } from "axios"


export default function SignUp () {
    const [user, setUser ] = useState({email: "", password: "", username:""})
    const onSignup = () => {

    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1 className="mx-auto">Sign Up</h1>

            <label htmlFor="username">username</label>
            <input className="my-2" type="text" id="username" value={user.username} 
            onChange={(e) => {setUser({...user, username: e.target.value})}} />
            
            <label htmlFor="email">email</label>
            <input className="my-2" type="text" id="email" value={user.email} 
            onChange={(e) => {setUser({...user, email: e.target.value})}} />
            
            <label htmlFor="password">password</label>
            <input className="my-2" type="password" id="password" value={user.password} 
            onChange={(e) => {setUser({...user, password: e.target.value})}} />
            <button onClick={onSignup} className="bg-teal-500 rounded-xl py-2 px-4">Sign Up</button>
            <Link href="/login" className="mt-4">Log In</Link>
        </div>
    )
}