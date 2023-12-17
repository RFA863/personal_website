"use client";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  return (
    <div className=" border-b border-slate-800  fixed top-0 z-[2] w-full backdrop-blur">
      <div className="flex justify-between mx-12 py-5  ">

        <button onClick={() => scrollToSection("hero")} >
          <div className="cursor-pointer">Rafi Fajrul A</div>
        </button>
        <div className="flex justify-between gap-7">
          <button onClick={() => scrollToSection("about")}>
            <p className=" py-2 px-8 hover:bg-slate-950 rounded-lg cursor-pointer">
              About
            </p>
          </button>
          <button onClick={() => scrollToSection("porto")}>
            <p className=" py-2 px-8 hover:bg-slate-950 rounded-lg cursor-pointer">
              portofolio
            </p>
          </button>
          <button onClick={() => scrollToSection("footer")} >
            <p className=" py-2 px-8 hover:bg-slate-950 rounded-lg cursor-pointer">
              Contact
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
