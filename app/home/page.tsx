import { HomeComponent } from "@/components/home";
import { Suspense } from "react";
export default function Home() {
    return <Suspense><HomeComponent/></Suspense>
}
