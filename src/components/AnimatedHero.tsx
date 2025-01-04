"use client";
import { motion } from "framer-motion";
import React from "react";
import { Canvas } from "./canvasForModel";
import { Button } from "./ui/button";

function AnimatedHeroWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen bg-slate-100 w-full overflow-hidden flex flex-col gap-4 justify-start items-start">
      {/* Animated Text Overlay */}
      <motion.div className="z-10 ml-10 sm:ml-24 mt-10">
        <AnimatedText
          custom={0}
          className="text-md mb-1 font-semibold w-fit p-1 rounded-lg text-gray-500"
        >
          Experience Innovation at Its Peak
        </AnimatedText>

        <AnimatedText
          custom={1}
          className="text-2xl font-serif md:text-3xl lg:text-5xl font-extrabold text-gray-600 opacity-50"
        >
          FORMULA BHARAT BY
        </AnimatedText>

        <AnimatedText
          custom={2}
          className="text-4xl font-sans md:text-6xl lg:text-9xl mx-auto text-brandPrimary font-extrabold leading-none"
        >
          Team Shireto
        </AnimatedText>
      </motion.div>

      {/* Animated Call to Action Button */}
      <motion.a
        href="/"
        className="mt-4 ml-10 sm:ml-24 inline-flex z-10 h-12 w-full sm:w-auto items-center justify-center rounded-md border border-rose-200 bg-white px-10 sm:mx-2 text-sm font-medium shadow-sm transition-colors hover:bg-rose-100 hover:text-rose-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Learn More
      </motion.a>

      <AnimatedText
        custom={5}
        className="mx-auto mt-36 text-sm md:text-md lg:text-xl font-semibold text-slate-600 z-10"
      >
        “Pushing Limits, Chasing Victory”
      </AnimatedText>

      {/* MODEL WILL LOAD HERE */}
      {children}
    </div>
  );
}
export default function AnimatedHero() {
  return (
    <AnimatedHeroWrapper>
      <Canvas />
    </AnimatedHeroWrapper>
  );
}

interface AnimatedTextProps {
  className: string;
  custom: number;
  children: React.ReactNode;
}

function AnimatedText({ className, custom, children }: AnimatedTextProps) {
  // Animation variants for text with custom delay
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: i * 0.8 },
    }),
  };

  return (
    <motion.p
      initial="hidden"
      variants={textVariants}
      whileInView="visible"
      viewport={{ once: true }} // Trigger animation only once
      custom={custom}
      className={className}
    >
      {children}
    </motion.p>
  );
}
