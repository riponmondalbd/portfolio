import Image from "next/image";
import Link from "next/link";
import logoImage from "../../../public/logo-orange.png";
export default function FooterSection() {
  return (
    <footer className="bg-[#f4f4f4] dark:bg-black py-10">
      <div className="max-w-7xl mx-auto">
        <div>
          <Link href={"/"}>
            <Image
              className="mx-auto mb-5"
              width={25}
              height={25}
              src={logoImage}
              alt="logo"
            />
          </Link>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Ripon Mondal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
