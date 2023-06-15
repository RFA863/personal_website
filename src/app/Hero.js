import Image from "next/image";
import bgHero from "./../../public/img/bgHero.png";

export default function Landing_Page() {
  return (
    <div id="Hero">
      <Image src={bgHero} className="w-screen" />
      <div className="absolute top-80 z-[1] w-full">
        <div className="flex justify-center text-[#DDE6ED] text-5xl font-semibold  ">
          <p className="border-b-2 border-white pb-5">RAFI FAJRUL ARIYADI</p>
        </div>
        <div className="flex justify-center text-xl pt-2">
          I Am a Software Engineer.
        </div>
      </div>
    </div>
  );
}
