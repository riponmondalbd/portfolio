import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo-orange.png";
import { ThemeChanger } from "../ThemeChanger/ThemeChanger";

export default function Navbar() {
  return (
    <div className="bg-[#f4f4f4] dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-3">
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
          <div>Menu bar</div>
          <div>
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
}
