import { FaWhatsapp, FaTelegram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div id="footer" className="bg-gray-950 ">
      <div className="flex justify-between mx-12 py-6">
        <p>&#169; 2023 Rafi Fajrul. - All Rights Reserved</p>
        <div className="flex gap-5 text-2xl">
          <FaWhatsapp />
          <FaTelegram />
          <FaGithub />
          <SiGmail />
        </div>
      </div>
    </div>
  );
}
