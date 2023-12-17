"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { FaReact, FaNode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

import CahayaTerangImg from "../../../public/img/cahayaTerang_img.png"

export default function CompanyProfile({ closeArticle }) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="zoom-out">

            <div className="pb-4 sm:pl-4 mb-4 border-b border-slate-400 sm:text-lg text-sm font-semibold flex justify-between items-center" >
                Company Profile
                <AiOutlineClose className="sm:text-3xl text-lg cursor-pointer" onClick={closeArticle} />
            </div>


            <Image src={CahayaTerangImg} alt="cahaya terang img" className="rounded-lg" />

            <div className="my-4 py-4 border-t border-slate-400 text-justify">

                During my six-month internship at CV. Cahaya Terang, I had the opportunity to be
                involved in an intriguing project within the IT division, focusing on creating the
                company profile. The goal of this project was to provide an engaging and informative
                overview of the company through a responsive website.
                <br />  <br />

                In the role of a team leader, my responsibilities included team coordination,
                project planning, and making strategic decisions. I collaborated with the development
                team using cutting-edge technologies, building a web-based application using the React.js
                framework for the frontend, Express.js for the backend, and MySQL as the database.
                <br /> <br />

                The outcome of the project was a visually appealing and responsive website, effectively
                reflecting the company's identity. I take pride in leading the team to achieve the project's
                objectives and witnessing our work become an effective tool for presenting the company to the world.
                <br /> <br />

                Throughout the internship, I not only gained valuable technical experience in modern web development but
                also learned the importance of teamwork. This process enriched my knowledge in creating cleaner and more
                efficient code, as well as developing communication and team management skills.
                <br /> <br />

                This internship project provided an invaluable learning opportunity, broadening my insights into the world
                of web development and enhancing my team leadership skills. I am sincerely grateful to CV. Cahaya Terang for
                this valuable experience.

            </div>
            <div className="font-semibold text-lg">
                Tech Stack :
                <div className="flex gap-3 text-5xl mt-2 mb-4">
                    <FaReact />
                    <TbBrandNextjs />
                    <SiExpress />
                    <FaNode />
                    <SiJavascript />
                    <SiTailwindcss />
                    <SiMysql />
                </div>
            </div>
        </div>
    )
}
