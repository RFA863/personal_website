"use client";

import AOS from 'aos';
import BackgroundVideo from 'next-video/background-video';
// import Image from "next/image";
import Video from 'next-video';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import bgVideo from "./../../videos/bgVidio.mp4";
// import bgHero from "./../../public/img/bgHero.png";
// import getStarted from "./../../videos/get-started.mp4"

export default function Landing_Page() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="hero" className=" flex justify-center items-center">
      <BackgroundVideo src={bgVideo}>


        <div
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top"
          className="sm:px-10 px-5 py-8 backdrop-blur-lg   rounded-md shadow-2xl shadow-black">

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
        {/* <Video src={bgVideo} /> */}
        {/* <Video src={getStarted} /> */}
        {/* <Image src={bgHero} className="sm:w-screen object-cover h-screen  " />
     */}
      </BackgroundVideo>
    </div>
  );
}
