
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FaReact, FaNode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

import CahayaTerangImg from "../../../public/img/cahayaTerang_img.png"

export default function ManagementSystem({ closeArticle }) {
    return (
        <div>

            <div className="pb-4 pl-4 mb-4 border-b border-slate-400 text-lg font-semibold flex justify-between items-center" >
                Management System
                <AiOutlineClose className="text-3xl cursor-pointer" onClick={closeArticle} />
            </div>


            <Image src={CahayaTerangImg} alt="cahaya terang img" className="rounded-lg" />

            <div className="my-4 py-4 border-t border-slate-400 text-justify">

                During a six-month internship at CV. Cahaya Terang, I was involved in the Tech division
                and took the role of leading a critical project for the company's operations.
                The project aimed to create an application that could efficiently record, print, and manage order data.
                <br />  <br />

                This application was developed using the React.js framework for the frontend and Express.js for
                the backend, with a MySQL database. My role as a team leader involved coordination and leading
                the team to ensure the project ran smoothly.
                <br /> <br />

                One of the main challenges we faced was migrating data from the previous application to the new one.
                Despite being a complex task, we successfully completed it, resulting in positive outcomes such
                as a better and more dynamic user interface. The new application not only provided functional
                improvements but also addressed bugs present in the previous version.
                <br /> <br />

                This experience brought valuable lessons in creating cleaner and more efficient code, enhancing
                teamwork skills. Through this project, I witnessed positive changes in the company's operations,
                making every effort and challenge during this internship highly meaningful.


            </div>
            <div className="font-semibold text-lg">
                Tech Stack :
                <div className="flex gap-3 text-5xl mt-2 mb-4">
                    <FaReact />

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
