"use client"
import { handleClick } from "@/libs/OAuthURL";


export default function OAuthButton() {

    return (
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login with Discord
        </button>
    )
}