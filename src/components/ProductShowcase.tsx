import appScreen from "@/assets/images/app-screen.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successs,
            one task at a time.
          </p>
        </div>
        <Image src={appScreen} alt="The product screenshot" className="mt-14" />
      </div>
    </div>
  );
};
