"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import  axios from "axios"


export default function Login () {
    const router = useRouter()
    const [user, setUser ] = useState({email: "", password: ""})
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])
    
    
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            // toast.success("Login success");
            router.push("/profile");
        } catch (error) {
            console.log("Login failed", error.message);
            // toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "Login"}</h1>
            
            <label htmlFor="email">email</label>
            <input className="my-2 text-black" type="text" id="email" value={user.email} 
            onChange={(e) => {setUser({...user, email: e.target.value})}} />
            
            <label htmlFor="password">password</label>
            <input className="my-2 text-black" type="password" id="password" value={user.password} 
            onChange={(e) => {setUser({...user, password: e.target.value})}} />
            <button onClick={onLogin} className="bg-teal-500 rounded-xl py-2 px-4">Log In</button>
            <Link href="/signup" className="mt-4">Sign Up Here</Link>
        </div>
    )
}