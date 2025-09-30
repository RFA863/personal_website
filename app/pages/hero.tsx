import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import HeroImage from "../../public/hero_img.png";

export default function Hero() {
  return(
    <div className="flex justify-between items-center overflow-hidden h-dvh max-w-dvw mx-24">
      <div className="font-orbitron font-bold">
          
        <p className="text-8xl">Rafi Fajrul</p>

        <div className="flex justify-evenly gap-4 border-2 rounded-lg my-12">
          <div className="text-6xl bg-[#FFFFFF] text-[#0A1018] rounded-l-lg p-2">Software</div>
          <div className="text-6xl p-2">Engineer</div>
        </div>

        <div className=" flex gap-8">
          <FaGithub className="w-[50px] h-[50px]"/>
          <FaLinkedin className="w-[50px] h-[50px]"/>
          <FaInstagram className="w-[50px] h-[50px]"/>
        </div>
      </div>

      <div>

          <Image 
          src={HeroImage} 
          alt="Hero Image"
          width={670}
          height={705}
          />
       
        <div className="absolute top-80 -right-40 z-[-1] bg-[#58CDF8] rounded-full w-[435px] h-[435px] opacity-20 blur-3xl "></div>
        <div className="absolute top-30 right-80 z-[-1] bg-[#2F4D79] rounded-full w-[435px] h-[435px] opacity-20 blur-3xl "></div>
      
      </div>

    </div> 
  );
}
