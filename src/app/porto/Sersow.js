import Link from "next/link";
import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { FaReact, FaNode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

import SersowImg from "../../../public/img/sersow_img.png"

export default function Sersow({ closeArticle }) {
    return (
        <div>

            <div className="pb-4 pl-4 mb-4 border-b border-slate-400 text-lg font-semibold flex justify-between items-center" >
                <Link href="https://sersow.com">  Sersow.com </Link>
                <AiOutlineClose className="text-3xl cursor-pointer" onClick={closeArticle} />
            </div>


            <Image src={SersowImg} alt="sersow banner img" className="rounded-lg" />

            <div className="my-4 py-4 border-t border-slate-400 text-justify">
                Welcome to Sersow, the digital haven empowering tech enthusiasts to shine
                their brightest! Sersow is a revolutionary showcase platform that empowers
                users to exhibit a diverse range of works, from groundbreaking websites and
                insightful articles to profound journals and cutting-edge applications.
                <br />  <br />
                <span className="font-semibold text-lg">Objective:</span>  <br />
                Sersow is born out of the need for a collaborative space in the world
                of software technology. Our goal is simple: to provide a platform where
                every user can proudly showcase their work, creating an ecosystem that
                advances and inspires.
                <br /> <br />
                <span className="font-semibold text-lg"> Addressing the Challenge: </span> <br />
                In an era where digital innovation is rampant, the lack of platforms
                facilitating the exhibition of software technology works becomes a constraint.
                Sersow steps in to fill this void, creating a space where creatives can proudly
                showcase their achievements.
                <br /> <br />
                <span className="font-semibold text-lg"> Technology at Play: </span> <br />
                Sersow blends technological sophistication to deliver the best user experience.
                Using the Next.js framework for the frontend and Express.js for the backend,
                Sersow ensures user navigation and interaction become increasingly delightful over time.
                Moreover, the MYSQL database management system ensures data security and reliability.
                <br /> <br />
                <span className="font-semibold text-lg"> Benefits: </span> <br />
                Sersow is not just a showcase platform; it's a motivation catalyst. With the hope that
                users remain motivated to create compelling works, Sersow becomes a hub of inspiration
                and idea exchange in the world of software technology.
                <br /> <br />
                <span className="font-semibold text-lg"> Distinctive Features: </span> <br />
                Sersow is more than just a showcase platform; it's an interactive community.
                Following one another, giving likes, and providing comments on others' works are part of
                daily life on Sersow. The Trending page serves as a space to discover the hottest projects
                currently stealing the spotlight among Sersow users.
                <br /> <br />
                Join Sersow and be part of the collaborative revolution in the world of software technology.
                Start showcasing your work and discovering new inspiration today!
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
