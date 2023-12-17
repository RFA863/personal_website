"use client";

import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'

import bgHero from "./../../public/img/bgHero.png";

export default function Landing_Page() {
  return (
    <div id="hero" className="relative flex justify-center items-center">

      <div className="sm:px-10 px-5 py-8 backdrop-blur-lg absolute  z-[1]  rounded-md shadow-2xl shadow-black">

        <div className="flex justify-center  sm:text-7xl text-2xl font-semibold border-b-2 border-white pb-5 ">
          RAFI FAJRUL ARIYADI
        </div>

        <div className="flex justify-center sm:text-3xl text-md sm:px-4 px-2 py-2">
          I Am a
          <span className="ml-2 sm:px-4  rounded-lg  font-semibold">
            <Typewriter
              words={['Software Engineer.', 'Software Developer.',
                'Web Engineer.', 'Web Developer.', 'Frontend Web Developer.',
                'Backend Developer.', 'Full Stack Developer.']}
              cursor
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000} />
          </span>
        </div>
      </div>
      <Image src={bgHero} className="sm:w-screen object-cover h-screen  " />
    </div>
  );
}
