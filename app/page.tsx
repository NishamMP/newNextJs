"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (username == "Nisham" && password == "12345"){
      router.push(`/home?data=${encodeURIComponent(username)}`)
    }
    else{
      alert("Something went wrong please check again")
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row bg-gray-100 bg-opacity-40 backdrop-blur-3xl w-96 h-96 rounded-xl ">
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <label>Username</label>
            <input className ="p-2 border-blue-300 rounded w-full text-black" type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder="Enter Password" className ="p-2 border-blue-300 rounded w-full text-black" id="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button className="p-2 bg-blue-900 rounded w-full" type="submit">Login</button>
          </form>
        </div>
      </main>
      
    </div>
  );
}
