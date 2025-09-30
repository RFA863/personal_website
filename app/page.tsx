import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./pages/hero";
import About from "./pages/about";

export default function Home() {
  return (
    <div className="relative overflow-hidden ">
      <Navbar/>
      <div className="overflow-y-auto">
      <Hero/>
      <About/>
      </div>
    </div>
  );
}
