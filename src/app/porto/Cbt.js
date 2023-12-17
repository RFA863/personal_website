
import { AiOutlineClose } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { SiApachenetbeanside, SiMysql } from "react-icons/si";



export default function Cbt({ closeArticle }) {
    return (
        <div>

            <div className="pb-4 sm:pl-4 mb-4 border-b border-slate-400 sm:text-lg text-sm font-semibold flex justify-between items-center" >
                Computer Based Test (CBT)
                <AiOutlineClose className="sm:text-3xl text-lg cursor-pointer" onClick={closeArticle} />
            </div>




            <div className="my-4 py-4 border-t border-slate-400 text-justify">

                In the Object-Oriented Programming course, I took on the challenge of developing a project titled
                "Computer Based Test" (CBT). CBT is an innovative desktop application specifically designed to conduct
                exams and create computer-based tests. This project is not just a coursework assignment; it is also a
                significant step in my journey to successfully complete this course.
                <br />  <br />

                With a focus on the principles of object-oriented programming, I designed and built CBT as a modern
                solution for exam management. Involving careful planning, in-depth needs analysis, and sophisticated
                object-oriented design, this project showcases the direct application of the concepts I've learned
                throughout the course.
                <br /> <br />

                The technology chosen for this project is the Java programming language, implemented using the NetBeans IDE,
                and supported by the MySQL database management system. The use of Java ensures the reliability and portability
                of the application, while MySQL provides an efficient solution for database management.
                <br /> <br />

                As the developer, I am excited to deliver this solution and facilitate efficient computer-based exams.
                This project is not just about meeting academic requirements but also about building a deep understanding of object-oriented
                programming and applying it to a meaningful project. I believe that CBT will be a significant milestone in my journey as a developing programmer.




            </div>
            <div className="font-semibold text-lg">
                Tech Stack :
                <div className="flex gap-3 text-5xl mt-2 mb-4">
                    <FaJava />
                    <SiApachenetbeanside />
                    <SiMysql />
                </div>
            </div>
        </div>
    )
}
