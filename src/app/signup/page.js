"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import axios from "axios"


export default function SignUp () {
    const router = useRouter();
    const [user, setUser ] = useState({email: "", password: "", username:""})
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.username.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error) {
            console.log("Signup failed", error.message);
            
            // toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1 className="mx-auto">{loading ? "Processing": "Sign Up Form"}</h1>

            <label htmlFor="username">username</label>
            <input className="my-2 text-black" type="text" id="username" value={user.username} 
            onChange={(e) => {setUser({...user, username: e.target.value})}} />
            
            <label htmlFor="email">email</label>
            <input className="my-2 text-black" type="text" id="email" value={user.email} 
            onChange={(e) => {setUser({...user, email: e.target.value})}} />
            
            <label htmlFor="password">password</label>
            <input className="my-2 text-black" type="password" id="password" value={user.password} 
            onChange={(e) => {setUser({...user, password: e.target.value})}} />
            <button onClick={onSignup} className={buttonDisabled ? "bg-red-500 rounded-xl py-2 px-4":"bg-teal-500 rounded-xl py-2 px-4"} disabled={buttonDisabled}>{buttonDisabled ? "Please fill out": "Sign Up"}</button>
            <Link href="/login" className="mt-4">Log In</Link>
        </div>
    )
}