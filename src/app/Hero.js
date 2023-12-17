"use client";

import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'

import bgHero from "./../../public/img/bgHero.png";

export default function Landing_Page() {
  return (
    <div id="hero" className="relative flex justify-center items-center">
      <div className="px-10 py-8 backdrop-blur-lg absolute  z-[1]  rounded-md shadow-2xl shadow-black">
        <div className="flex justify-center  text-7xl font-semibold border-b-2 border-white pb-5 ">
          RAFI FAJRUL ARIYADI
        </div>
        <div className="flex justify-center text-3xl  px-4 py-2">
          I Am a
          <span className="ml-2 px-4  rounded-lg  font-semibold">
            <Typewriter
              words={['Software Engineer.', 'Software Developer.',
                'Web Engineer.', 'Web Developer.', 'Front-End Web Developer.',
                'Back-End Developer.', 'Full-Stack Developer.']}
              cursor
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000} />
          </span>
        </div>
      </div>
      <Image src={bgHero} className="w-screen" />
    </div>
  );
}
