import Blog from "./Blog";
import Hero from "./Hero";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden font-mono bg-gradient-to-t from-slate-900  via-zinc-900 to-black text-white ">
      <Header />
      <Hero />
      <About />
      <Blog />
      <Footer />
    </main>
  );
}
