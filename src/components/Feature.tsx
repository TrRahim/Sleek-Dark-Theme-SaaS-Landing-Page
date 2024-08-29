"use client";

import EcosystemIcon from "@/assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const updateMousePostion = (e: MouseEvent) => {
      if (!borderRef.current) return;

      const borderRect = borderRef.current.getBoundingClientRect();

      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePostion);

    return () => window.removeEventListener("mousemove", updateMousePostion);
  }, []);
  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
      <motion.div
        aria-hidden="true"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        ref={borderRef}
      />
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/79">{description}</p>
    </div>
  );
};
