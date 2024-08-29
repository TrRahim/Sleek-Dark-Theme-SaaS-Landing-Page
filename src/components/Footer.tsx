import InstaIcon from "@/assets/icons/insta.svg";
import TiktokIcon from "@/assets/icons/tiktok.svg";
import XSocial from "@/assets/icons/x-social.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 sm:py-24 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
          <div className="text-center">
            &#169; 2024 Your Company, Inc. All Rights Reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <InstaIcon className="cursor-pointer hover:text-white/50" />
            </li>
            <li>
              <XSocial className="cursor-pointer hover:text-white/50" />
            </li>
            <li>
              <TiktokIcon className="cursor-pointer hover:text-white/50" />
            </li>
            <li>
              <YoutubeIcon className="cursor-pointer hover:text-white/50" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
