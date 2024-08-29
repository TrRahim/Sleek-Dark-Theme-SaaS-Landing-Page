"use client";

import appScreen from "@/assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImageRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ["start end", "end start"], // Adjust this if needed
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your success,
            one task at a time.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
          className="flex items-center justify-center mt-14" // Adjust positioning here
        >
          <Image
            ref={appImageRef}
            src={appScreen}
            alt="The product screenshot"
            className="h-auto w-auto max-w-full" // Ensure the image fits well
          />
        </motion.div>
      </div>
    </div>
  );
};
