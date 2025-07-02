import Image from "next/image";
import Link from "next/link";
import RoundedImage from "../../../public/banner-orange.png";
import subjectImage from "../../../public/ripon-circle.png";
import { Button } from "../ui/button";

export default function BannerSection() {
  return (
    <div className="bg-[#f4f4f4] dark:bg-black">
      <div className="max-w-7xl mx-auto px-1 py-10 md:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* left side content */}
          <div className="w-full space-y-5 text-center md:text-left">
            <h2 className="text-3xl font-bold text-shadow-2xs text-[#DF5C17]">
              Web Developer
            </h2>
            <h1 className="text-7xl text-shadow-2xs uppercase font-bold animate-fade-up animate-once animate-duration-500 animate-ease-linear ">
              Ripon <br /> Mondal
            </h1>
            <p className="xl:w-2/3 py-4">
              A web developer and a curious learner who loves building websites
              and trying to fix critical errors. Although it’s not always
              enjoyable, I always try to do my best.
            </p>

            {/* button groups */}
            <div className="flex gap-4 items-center justify-center md:justify-start">
              {/* skills */}
              <Link href={"#portfolio"}>
                <Button className="cursor-pointer bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear py-6">
                  Projects
                </Button>
              </Link>

              {/* resume */}
              <Link
                href={
                  "https://drive.google.com/file/d/1YrvdR6291jd8FgywZBvx0BU5MvfrbCNP/view?usp=drive_link"
                }
                target="_blank"
              >
                <Button className="cursor-pointer bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear py-6">
                  Resume
                </Button>
              </Link>
            </div>
          </div>
          {/* right side content image */}
          <div className="w-full xl:relative pb-8 md:pb-0">
            <Image
              width={600}
              height={600}
              src={RoundedImage}
              alt="rounded background"
              className="animate-spin hidden xl:block animate-infinite animate-duration-[50000ms]"
            />
            <Image
              width={600}
              height={600}
              className="xl:absolute top-0 border-2 xl:border-0 border-[#DF5C17] rounded-full xl:p-16"
              src={subjectImage}
              alt="main subject"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
