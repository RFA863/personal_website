"use client";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  return (
    <div className="fixed top-0 z-[2]  border-b border-slate-800 backdrop-blur w-screen">
      <div className="flex justify-between sm:mx-12 sm:py-5 py-3 mx-2 text-xs sm:text-xl">

        <button onClick={() => scrollToSection("hero")}  >
          <div className="cursor-pointer">Rafi Fajrul A</div>
        </button>

        <div className="flex justify-between sm:basis-1/3 sm:gap-2">
          <button onClick={() => scrollToSection("about")}>
            <p className="py-2 sm:px-6 px-3 hover:bg-slate-300 hover:text-gray-800 rounded-lg cursor-pointer">
              About
            </p>
          </button>
          <button onClick={() => scrollToSection("blog")}>
            <p className="py-2 sm:px-6 px-3 hover:bg-slate-300 hover:text-gray-800 rounded-lg cursor-pointer">
              Blog
            </p>
          </button>
          <button onClick={() => scrollToSection("footer")} >
            <p className="py-2 sm:px-6 px-3 hover:bg-slate-300 hover:text-gray-800 rounded-lg cursor-pointer">
              Contact
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
