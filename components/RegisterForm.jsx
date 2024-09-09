"use client"
import Link from 'next/link';
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState(password)
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !retypePassword) {
      setError("all fields need complete")
      return
    }
    if (password !== retypePassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const resUserExist = await fetch("api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const { user } = await resUserExist.json();

      if (user) {
        setError("user email already exist")
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };


  return (
    <div className="container flex flex-col items-center p-16 h-screen mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col justify-start shadow-xl rounded-lg py-8 px-20 gap-4 bg-slate-50"  >
        <h1 className='text-lg font-bold'>Register</h1>
        <input
          onChange={(e) => { setName(e.target.value) }}
          type="text"
          placeholder="Full Name"
          className="input input-bordered max-w-xs w-full"
        />
        <input
          onChange={(e) => { setEmail(e.target.value) }}
          type="email"
          placeholder="Email"
          className="input input-bordered max-w-xs w-full"
        />
        <input
          onChange={(e) => { setPassword(e.target.value) }}
          type="password"
          placeholder="Password"
          className="input input-bordered max-w-xs w-full"
        />
        <input
          onChange={(e) => { setRetypePassword(e.target.value) }}
          type="password"
          placeholder="Re-type Password"
          className="input input-bordered max-w-xs w-full"
        />
        {error && (
          <span className='py-2 px-4 text-white text-xs bg-red-600 w-44 rounded-lg'>
            {error}
          </span>
        )}

        <button type="submit" className="btn btn-primary">Register</button>
        <Link href='/'>
          Already have an account? <span className="link-primary underline">Log in</span>
        </Link>

      </form>
    </div>
  )
}

