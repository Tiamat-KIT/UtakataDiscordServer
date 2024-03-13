"use client"
import OAuthButton from "@/components/ui/OAuthButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
   <main>
    <BackgroundGradientAnimation>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/>
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Welcome Utakata Discord Bot Landing Page
      </h1>
    </BackgroundGradientAnimation>
   </main>
  );
}
