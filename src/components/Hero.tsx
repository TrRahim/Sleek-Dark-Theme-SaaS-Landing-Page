import ArrowIcon from "@/assets/icons/arrow-w.svg";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4721a1_65%,#a46edb_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div
        className="absolute h-[200px] w-[750px] sm:h-[500px] sm:w-[1536px] lg:w-[2900px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="border py-1 px-2 rounded-lg border-white/30 inline-flex gap-3"
          >
            <span className="bg-[linear-gradient(to_right,#f87aff,#f893d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <Image
              src={cursorImage}
              height={200}
              width={200}
              className="absolute right-[476px] top-[108px] hidden sm:inline"
              alt="cursor image"
            />
            <h1 className="text-7xl sm:text-9xl font-bold -tracking-tighter text-center">
              One Task <br /> at Time
            </h1>
            <Image
              src={messageImage}
              height={200}
              className="absolute left-[498px] top-[56px] hidden sm:inline"
              width={200}
              alt="message image"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            progressm motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
