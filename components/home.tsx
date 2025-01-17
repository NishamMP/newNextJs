"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export const HomeComponent =()=>{
    const searchparams = useSearchParams();
    const data = searchparams.get("data")
    return <Suspense fallback={<h1>loading</h1>}> <h1>{data}</h1></Suspense> ;
}
