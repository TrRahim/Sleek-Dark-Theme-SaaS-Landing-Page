import MenuIcon from "@/assets/icons/menu.svg";
import LogoImage from "@/assets/images/logosaas.png";
import Image from "next/image";
import Link from "next/link";

const navLinks = ["About", "Features", "Updates", "Help", "Customers"];

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#f8fbff,#fb92cf,#ffdd9b,#c2f0b1,#2dfbfe)] blur-md"
            />
            <Image
              className="h-12 w-12 relative"
              src={LogoImage}
              alt="SASS logo"
            />
          </div>
          <div className="border border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="items-center gap-6 hidden sm:flex">
            {navLinks.map((l) => (
              <Link
                href="#"
                key={l}
                className="text-white text-opacity-60 hover:text-opacity-100 transition"
              >
                {l}
              </Link>
            ))}
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
