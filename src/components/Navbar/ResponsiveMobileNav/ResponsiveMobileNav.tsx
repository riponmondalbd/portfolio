import Link from "next/link";
import { NavbarData } from "../Navbardata/NavbarData";

export default function ResponsiveMobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <div className=" md:hidden fixed w-full z-50">
      {open && (
        <div className="absolute w-full bg-[#f4f4f4] shadow-lg pt-2 pb-2 dark:bg-black animate-fade-down animate-once animate-duration-500 animate-delay-100">
          <ul className="flex flex-col items-center gap-4">
            {NavbarData.map((navData) => (
              <li
                key={navData.id}
                className="font-semibold hover:text-[#DF5C17] duration-300 hover:bg-neutral-300  w-full text-center "
              >
                <Link
                  href={navData.link}
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  {navData.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
