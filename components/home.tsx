"use client";
import { useSearchParams } from "next/navigation";

export const HomeComponent =()=>{
    const searchparams = useSearchParams();
    const data = searchparams.get("data")
    return <h1>{data ? data : "No data provided"}</h1>;;
}
