import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo-orange.png";

export default function Navbar() {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <Link href={"/"}>
            <div className="flex items-center">
              <Image
                src={logo}
                height={17}
                width={17}
                alt="main logo"
                className="mt-1"
              />
              <span className="text-4xl font-bold uppercase">ipon</span>
            </div>
          </Link>
          <div>Menu bar</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}
