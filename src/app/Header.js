import Link from "next/link";

export default function Header() {
  return (
    <div className=" border-b border-slate-800  fixed top-0 z-[2] w-full backdrop-blur">
      <div className="flex justify-between mx-12 py-5  ">
        <Link href="#Hero">
          <div className="cursor-pointer">Rafi Fajrul A</div>
        </Link>
        <div className="flex justify-between gap-7">
          <Link href="#About">
            <p className=" py-2 px-8 hover:bg-slate-950 rounded-lg cursor-pointer">
              About
            </p>
          </Link>
          <Link href="#Blog">
            <p className=" py-2 px-8 hover:bg-slate-950 rounded-lg cursor-pointer">
              Blog
            </p>
          </Link>
          <Link href="#Contact">
            <p className=" py-2 px-8 hover:bg-slate-950 rounded-lg cursor-pointer">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
