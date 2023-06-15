import Image from "next/image";

import PP from "../../public/img/PP.jpg";

export default function About() {
  return (
    <div id="About" className="flex py-10 border-b-2 border-white">
      <div className="flex justify-center items-center px-10 ">
        <Image src={PP} className="rounded-full w-full" />
      </div>
      <div className="text-justify px-10">
        <p className="font-semibold text-2xl border-b-2 border-white pb-3 pl-3">
          ABOUT ME
        </p>
        <div className="mt-5">
          <p>
            I decided to create this personal website to share my knowledge,
            experiences, and opinions about topics that interest me. As a fan of
            these topics, I believe I have a lot of useful information and
            experiences that can benefit others who share similar interests.
          </p>
          <br />
          <p>
            Through this website, I hope to provide value to my readers by
            sharing my knowledge, experiences, and perspectives. I believe that
            my readers can gain new insights and perspectives that they may not
            have encountered before.
          </p>
          <br />
          <p>
            I also hope that the content I write on this website can attract
            readers and keep them coming back for more. I aim to create a
            community where people with similar interests can interact and
            discuss the topics that I write about.
          </p>
          <br />
          <p>
            To achieve these goals, I strive to write informative, up-to-date,
            and high-quality content. I always try to update my personal website
            with new content regularly and conduct in-depth research on the
            topics I cover.
          </p>
          <br />
          <p>
            So, by creating this personal website, I hope to convey my
            knowledge, experiences, and perspectives on topics that interest me,
            and help others who share similar interests. I hope you enjoy the
            content I write here and become part of my community on this
            personal website.
          </p>
        </div>
        <br />
        <table>
          <tr>
            <td>Name</td>
            <td className="px-3">:</td>
            <td>Rafi Fajrul Ariyadi</td>
          </tr>
          <tr>
            <td>Place of Birth</td>
            <td className="px-3">:</td>
            <td>Kota Bogor,Provinsi Jawa Barat, Negara Indonesia </td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td className="px-3">:</td>
            <td>08, Juni 2003</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td className="px-3">:</td>
            <td>+6287711173404</td>
          </tr>
          <tr>
            <td>E-Mail</td>
            <td className="px-3">:</td>
            <td>rafifajrul77@gmail.com</td>
          </tr>
          <tr>
            <td>Education</td>
            <td className="px-3">:</td>
            <td>Software Engeneering, Universitas Pendidikan Indonesia</td>
          </tr>
          <tr>
            <td>NameProgramming Languages </td>
            <td className="px-3">:</td>
            <td>C++, Python, Java, JavaScript</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
