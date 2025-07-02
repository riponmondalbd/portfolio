import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex gap-4">
      <Link
        href={"https://www.instagram.com/riponmondalbd/"}
        target="_blank"
        className="border p-2 rounded-full bg-[#e7e7e7] dark:bg-[#DF5C17] dark:text-white hover:bg-[#DF5C17] hover:text-white dark:hover:text-[#DF5C17] dark:hover:bg-white duration-700 hover:animate-jump animate-once animate-ease-linear"
      >
        <FaInstagram className="text-xl" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/riponmondalbd/"}
        target="_blank"
        className="border p-2 rounded-full bg-[#e7e7e7] dark:bg-[#DF5C17] dark:text-white hover:bg-[#DF5C17] hover:text-white dark:hover:text-[#DF5C17] dark:hover:bg-white duration-700 hover:animate-jump animate-once animate-ease-linear"
      >
        <FaLinkedin className="text-xl" />
      </Link>
      <Link
        href={"https://github.com/riponmondalbd"}
        target="_blank"
        className="border p-2 rounded-full bg-[#e7e7e7] dark:bg-[#DF5C17] dark:text-white hover:bg-[#DF5C17] hover:text-white dark:hover:text-[#DF5C17] dark:hover:bg-white duration-700 hover:animate-jump animate-once animate-ease-linear"
      >
        <FaGithub className="text-xl" />
      </Link>

      <Link
        href={"https://m.facebook.com/riponmondalbd/"}
        target="_blank"
        className="border p-2 rounded-full bg-[#e7e7e7] dark:bg-[#DF5C17] dark:text-white hover:bg-[#DF5C17] hover:text-white dark:hover:text-[#DF5C17] dark:hover:bg-white duration-700 hover:animate-jump animate-once animate-ease-linear"
      >
        <FaFacebook className="text-xl" />
      </Link>
    </div>
  );
}
