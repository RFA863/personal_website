import Link from "next/link";
import { FaWhatsapp, FaTelegram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div id="footer" className="bg-gray-950 ">
      <div className="flex justify-between sm:mx-12 mx-4 py-6 sm:text-md text-xs">
        <p>&#169; 2023 Rafi Fajrul. - All Rights Reserved</p>
        <div className="flex sm:gap-5 gap-3  sm:text-2xl text-lg">

          <Link href="https://api.whatsapp.com/send/?phone=6287711173404&text&type=phone_number&app_absent=0">
            <FaWhatsapp />
          </Link>

          <Link href="https://t.me/rafi_fajrul">
            <FaTelegram />
          </Link>

          <Link href="https://github.com/RFA863">
            <FaGithub />
          </Link>

          <Link href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rafifajrul77@gmail.com">
            <SiGmail />
          </Link>
        </div>
      </div>
    </div>
  );
}
