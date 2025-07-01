"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import logo from "../../../public/logo-orange.png";
import { ThemeChanger } from "../ThemeChanger/ThemeChanger";
import { NavbarData } from "./Navbardata/NavbarData";
import ResponsiveMobileNav from "./ResponsiveMobileNav/ResponsiveMobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`bg-[#f4f4f4] dark:bg-black sticky top-0 transition-shadow duration-300 z-10 ${
          hasShadow ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* logo section */}
          <div className="flex items-center justify-between py-3 px-1">
            <Link href={"/"}>
              <div className="flex items-center">
                <Image
                  src={logo}
                  height={18}
                  width={18}
                  alt="main logo"
                  className="mt-1"
                />
                <span className="text-4xl font-semibold uppercase">ipon</span>
              </div>
            </Link>

            {/* menu section */}
            {/* desktop menu */}
            <div className="hidden md:block">
              <ul className="flex gap-8">
                {NavbarData.map((navData) => (
                  <li
                    key={navData.id}
                    className="font-semibold hover:text-[#DF5C17] duration-300"
                  >
                    <Link href={navData.link}>{navData.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* theme changer section */}
            <div className="flex gap-2 items-center">
              <div>
                <ThemeChanger />
              </div>
              <div className="border p-2 rounded-md bg-white dark:bg-black hover:bg-[#f4f4f4] duration-300 md:hidden">
                {open ? (
                  <MdMenuOpen onClick={() => setOpen(!open)} />
                ) : (
                  <MdMenu onClick={() => setOpen(!open)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile menu */}
      <ResponsiveMobileNav open={open} setOpen={setOpen} />
    </>
  );
}
