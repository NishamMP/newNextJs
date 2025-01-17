"use client";
import { useSearchParams } from "next/navigation";
export default function Home() {
    const searchparams = useSearchParams();
    const data = searchparams.get("data")
    return <h1>{data}</h1>;
}
