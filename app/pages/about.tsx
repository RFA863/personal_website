import Image from "next/image";

import AboutImg from "../../public/about_img.png";

export default function About() {
  return(
    <div className="mx-24 mt-20">

      <div className="font-orbitron text-4xl px-4 border-b-2 w-fit">
        About
      </div>

      <div className="flex justify-between items-center my-8 relative border-2 backdrop-blur-2xl bg-white/10 border-white/30 rounded-xl px-4 gap-4">
       

        <div className="basis-1/3 flex justify-center relative">
          <Image src={AboutImg} alt="About Imange" className="rounded-xl"/>
          <div className="absolute left-0 top-50 z-[-1] w-[250px] h-[250px] bg-amber-700 opacity-20 rounded-full blur-2xl "></div>
          <div className="absolute right-0 top-10 z-[-1] w-[250px] h-[250px] bg-cyan-500 opacity-20 rounded-full blur-2xl "></div>
        </div>

        <div className="font-exo2 text-xl my-4 text-justify basis-2/3">
          Hi, I’m Rafi Fajrul Ariyadi, <br/>
          I'm a Software Engineer focused on crafting seamless web experiences, from engaging user 
          interfaces on the frontend to robust architectures on the backend. My passion lies in 
          transforming complex ideas into functional, elegant, and efficient web solutions.<br/><br/>

          With a year of intensive internship experience, I've honed my skills across a wide range 
          of modern web technologies. My expertise includes JavaScript, alongside popular frameworks 
          like React.js, Next.js, Vue.js, and Nuxt.js for frontend development. On the backend, I'm 
          proficient with Express.js, PHP with Laravel, and possess a solid foundation in Python, 
          C++, and Java. This diverse skillset allows me to contribute comprehensively throughout 
          the product development lifecycle.<br/><br/>

          I pride myself on being a quick learner and highly adaptable, always eager to tackle new 
          challenges and master emerging technologies. My approach is rooted in delivering clean, 
          efficient, and maintainable code, constantly seeking innovative ways to solve problems.<br/><br/>

          Beyond coding, I enjoy immersing myself in films. Watching movies is my way to unwind and 
          find inspiration, reminding me that every creation, much like software, has a unique story 
          and intricate details to explore.<br/><br/>
          This website serves as my digital portfolio, showcasing a variety of projects and 
          contributions I've had the pleasure of completing.<br/><br/>
        </div>
      </div>
      
    </div>
  );
}