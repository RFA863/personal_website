"use client";

import AOS from "aos";
import { useState, useEffect } from "react";

import Cbt from "./porto/Cbt";
import Sersow from "./porto/Sersow";
import Medium from "./porto/Medium";
import CompanyProfile from "./porto/CompanyProfile";
import ManagementSystem from "./porto/ManagementSystem";

export default function Blog() {

  useEffect(() => {
    AOS.init();
  }, [])

  const [porto, setPorto] = useState(0);

  const closeArticle = () => {
    setPorto(0);
  }

  let artikel;

  switch (porto) {
    case 1:
      artikel = <Medium closeArticle={closeArticle} />;
      break;

    case 2:
      artikel = <Sersow closeArticle={closeArticle} />;
      break;

    case 3:
      artikel = <Cbt closeArticle={closeArticle} />;
      break;

    case 4:
      artikel = <ManagementSystem closeArticle={closeArticle} />;
      break;

    case 5:
      artikel = <CompanyProfile closeArticle={closeArticle} />;
      break;

    default:
      artikel = null;
  }
  return (
    <div id="blog" >

      <div className="flex justify-center pt-12   font-semibold text-2xl  ">
        <p className="border-b-2 border-b-white pb-1 px-8">My blog</p>
      </div>

      <div className="flex justify-center py-10 gap-4 flex-wrap">

        <div data-aos="flip-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"

          className="border border-white rounded-md  py-4 w-72 text-center 
        hover:bg-slate-300 hover:text-gray-800 cursor-pointer" onClick={() => setPorto(1)}>
          Medium Blog
        </div>

        <div data-aos="flip-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"

          className="border border-white rounded-md py-4 w-72 text-center  
        hover:bg-slate-300 hover:text-gray-800 cursor-pointer" onClick={() => setPorto(2)}>
          Sersow
        </div>

        <div data-aos="flip-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"

          className="border border-white rounded-md py-4 w-72 text-center  
        hover:bg-slate-300 hover:text-gray-800 cursor-pointer" onClick={() => setPorto(3)}>
          Computer Based Test (CBT)
        </div>

        <div data-aos="flip-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"

          className="border border-white rounded-md py-4 w-72 text-center  
        hover:bg-slate-300 hover:text-gray-800 cursor-pointer" onClick={() => setPorto(4)}>
          Management System
        </div>

        <div data-aos="flip-down"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"

          className="border border-white rounded-md py-4 w-72 text-center  
        hover:bg-slate-300 hover:text-gray-800 cursor-pointer" onClick={() => setPorto(5)}>
          Company Profile
        </div>
      </div>
      {porto !== 0 &&
        <div data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="bottom"
          className=" border border-slate-600 rounded-lg sm:m-12 m-6  py-4  px-6">
          {artikel}
        </div>}

    </div>
  );
}
