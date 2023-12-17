import Image from "next/image";

import PP from "../../public/img/PP.jpg";

export default function About() {
  return (
    <div id="about" className="flex sm:flex-nowrap flex-wrap  pt-24 pb-10 border-b-2 border-white">

      <div className="flex justify-center items-center px-10 ">
        <Image src={PP} className="rounded-full w-full" />
      </div>

      <div className="text-justify sm:px-10 px-5 sm:pt-0 pt-8">
        <p className="font-semibold text-2xl border-b-2 border-white pb-3 pl-3 sm:text-left text-center">
          ABOUT ME
        </p>
        <div className="mt-5 sm:text-md text-sm">
          <p>
            Welcome to my digital haven! I've crafted this personal website as a
            vibrant hub to share the wealth of knowledge, experiences, and
            opinions that fuel my passion. Dive into a world where curiosity
            knows no bounds!
          </p>
          <br />
          <p>
            As a devoted enthusiast of various topics, I am on a mission to
            curate and present valuable insights that resonate with kindred
            spirits. This space isn't just about me—it's about fostering a
            community where shared interests flourish and conversations spark.
          </p>
          <br />
          <p>
            Embark on a journey of enlightenment as I unravel the layers of my
            knowledge, experiences, and unique perspectives. Through this
            digital alcove, I aim to offer you more than just information; I
            want to ignite fresh perspectives and broaden horizons you may not
            have explored before.
          </p>
          <br />
          <p>
            Expect nothing less than informative, up-to-date, and top-tier
            content. I dedicate myself to maintaining a vibrant tapestry of
            articles, fueled by meticulous research on the diverse subjects I
            cover. Your intellectual adventure awaits, and I'm committed to
            ensuring that each visit leaves you hungry for more.
          </p>
          <br />
          <p>
            Feel the pulse of this community, a space where enthusiasts converge
            to exchange ideas, opinions, and discoveries. As you navigate
            through my thoughts and reflections, consider this not just a
            website but a dynamic ecosystem waiting for your unique imprint.
          </p>
          <br />
          <p>
            I am Rafi Fajrul Ariyadi, your guide in this digital realm. Born in
            the lush city of Kota Bogor, Jawa Barat, Indonesia, on June 8, 2003,
            I am currently pursuing my education in Software Engineering at
            Universitas Pendidikan Indonesia. Proficient in languages such as
            C++, Python, Java, and JavaScript, I bring a technical flair to the
            diverse topics that pique my interest.
          </p>
          <br />
          <p>
            Join me in this digital voyage, where knowledge is shared,
            experiences are celebrated, and passions are kindled. Your adventure
            begins here, and I can't wait for you to become a cherished part of
            our ever-growing community! Feel free to reach out at +6287711173404
            or via email at rafifajrul77@gmail.com.
            <br /> Let's embark on this intellectual escapade together!
          </p>
          <br />
        </div>


      </div>
    </div>
  );
}
