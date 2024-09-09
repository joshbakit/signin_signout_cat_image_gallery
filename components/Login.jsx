"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', {
        email, password, redirect: false,

      });
      console.log("sing in:", res)
      if (res?.error) {
        setError("invalid credentials")
        return;
      }
      router.push("/dashboard")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container flex flex-col items-center p-16 h-screen mx-auto ">
      <h1 className='text-5xl lg:text-7xl uppercase text-center font-bold'>Cute cat image</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-start shadow-2xl max-w-md mt-8 rounded-lg py-8 px-20 gap-4 bg-slate-50"  >
        <h1 className='text-lg font-bold text-center'>Login to see the cat</h1>
        <input
          onChange={(e) => { setEmail(e.target.value) }}
          type="email"
          placeholder="Email"
          className="input input-bordered max-w-md w-full"
        />
        <input
          onChange={(e) => { setPassword(e.target.value) }}
          type="password"
          placeholder="Password"
          className="input input-bordered max-w-md w-full"
        />
        {error && (
          <span className='py-2 px-4 text-white text-xs bg-red-600 w-36 rounded-lg'>{error}</span>
        )}
        <button type="submit" className="btn btn-primary max-w-md">Continue</button>

        <Link href='/signup'>
          Don't have an account? <span className="link-primary underline">Sign up</span>
        </Link>

      </form>

    </div>
  )
}

export default Login
