"use client"
import { exchangeCodeForAccessToken } from "@/libs/OAuthURL";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        (async() => await exchangeCodeForAccessToken())()
    },[])
    return (
        <h1 className="text-5xl">Login...</h1>
    )
}
