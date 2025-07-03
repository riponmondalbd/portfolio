import Image from "next/image";
import Link from "next/link";

import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import logoImage from "../../../public/logo-orange.png";
import { NavbarData } from "../Navbar/Navbardata/NavbarData";
import SocialButtons from "../SocialButtons/SocialButtons";
export default function FooterSection() {
  return (
    <footer className="bg-[#f4f4f4] dark:bg-black py-10 px-1">
      <div className="max-w-7xl mx-auto">
        {/* footer content */}
        <div className="grid md:grid-cols-3 gap-6 border-b pb-10">
          <div>
            <Link
              href={"/"}
              className="flex gap-1 items-baseline justify-center md:justify-start"
            >
              <Image width={25} height={25} src={logoImage} alt="logo" />
              <span className="text-4xl font-semibold uppercase">ipon</span>
            </Link>
            <p className="py-5 xl:w-2/3 text-center md:text-left">
              Thank you for visiting. I am always eager to build something new —
              and I truly enjoy it.
            </p>

            {/* social links */}
            <div className="flex justify-center md:justify-start">
              <SocialButtons />
            </div>
          </div>

          {/* quick links */}
          <div>
            <h2 className="mb-5 text-2xl font-semibold mt-3 md:mt-0">
              Quick Links
            </h2>
            <ul className="space-y-5">
              {NavbarData.map((singleNab) => (
                <li
                  key={singleNab.id}
                  className="font-medium hover:text-[#DF5C17] duration-500 "
                >
                  <Link href={singleNab.link} className="w-full">
                    {singleNab.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact info */}
          <div className="space-y-5 font-medium md:-ml-6">
            <h2 className="mb-5 text-2xl font-semibold mt-3 md:mt-0">
              Contact
            </h2>
            <p className="flex gap-2 items-center ">
              <span className="border-2 p-2 rounded-full">
                <MdCall />
              </span>
              +880 1956 149980
            </p>
            <p className="flex gap-2 items-center ">
              <span className="border-2 p-2 rounded-full">
                <FaLocationDot />
              </span>
              Dhaka, Bangladesh
            </p>
            <p className="flex gap-2 items-center ">
              <span className="border-2 p-2 rounded-full">
                <MdEmail />
              </span>
              riponmondal149@gmail.com
            </p>
          </div>
        </div>
        {/* copyright section */}
        <div>
          <p className="text-center mt-10">
            &copy; {new Date().getFullYear()} Ripon Mondal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
