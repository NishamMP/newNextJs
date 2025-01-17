"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
export default function Home() {
    const searchparams = useSearchParams();
    const data = searchparams.get("data")
    return <Suspense fallback={<h1>loading</h1>}> <h1>{data}</h1></Suspense> ;
}
