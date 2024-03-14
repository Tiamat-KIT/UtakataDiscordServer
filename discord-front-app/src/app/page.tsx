"use client"

import { Spotlight } from "@/components/ui/Spotlight";
import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundGradientAnimation,BackgroundGradientAnimationProps } from "@/components/ui/background-gradient-animation";

export default function Home() {
  const variants:BackgroundGradientAnimationProps = {
    gradientBackgroundStart: "rgb(108, 0, 162)",
    gradientBackgroundEnd: "rgb(0, 17, 82)",
    firstColor: "18, 113, 255",
    secondColor: "221, 74, 255",
    thirdColor: "100, 220, 255",
    fourthColor: "200, 50, 50",
    fifthColor: "180, 180, 50",
    pointerColor: "140, 100, 255",
    size: "80%",
    blendingValue: "hard-light",
    className: "h-screen w-screen",
    interactive: true,
    containerClassName: "h-screen w-screen",
  }
  return (
   <main>
    <BackgroundGradientAnimation {...BackgroundGradientAnimation}>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/>
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Welcome Utakata Discord Bot Landing Page
      </h1>
    </BackgroundGradientAnimation>
   </main>
  );
}
