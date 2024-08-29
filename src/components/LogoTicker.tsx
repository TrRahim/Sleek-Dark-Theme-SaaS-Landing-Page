"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import apexLogo from "../assets/images/apex.png";
import celestialLogo from "../assets/images/celestial.png";
import echoLogo from "../assets/images/echo.png";
import pulseLogo from "../assets/images/pulse.png";
import quantumLogo from "../assets/images/quantum.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[52px] sm:py-20">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams.
        </h2>
        <div className="flex overflow-clip mt-9 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-16 pr-16 "
          >
            {images.map((image) => (
              <Image
                src={image.src}
                key={image.alt}
                alt={image.alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map((image) => (
              <Image
                src={image.src}
                key={image.alt}
                alt={image.alt}
                className=" h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
