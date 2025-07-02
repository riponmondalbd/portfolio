import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

import Link from "next/link";
import bistroBossImage from "../../../../public/assets/bistro-boss.png";
import bookReviewImage from "../../../../public/assets/book-review.png";
import dragonNewsPaperImage from "../../../../public/assets/dragon-newspaper.png";
import jobPortalImage from "../../../../public/assets/job-portal.png";
import poorDoctImage from "../../../../public/assets/poor-doct.png";
import portfolioImage from "../../../../public/assets/portfolio.png";

export default function AllPortfolio() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-10">
        {/* project 1  poor doct*/}
        <div className="border rounded-md bg-white dark:bg-black dark:border-[#DF5C17] hover:shadow-md p-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  className="rounded-md"
                  src={poorDoctImage}
                  alt="poor doct"
                />
                <h1 className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Poor Doct
                </h1>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <Image
                  className="rounded-md"
                  src={poorDoctImage}
                  alt="poor doct"
                />
                <AlertDialogTitle className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Car Doctor
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <span className="font-semibold">Technology:</span> React.js,
                  Javascript, Tailwind CSS, Node.js, Express.js, MongoDB,
                  Firebase, RESTful APIs
                </AlertDialogDescription>
                <AlertDialogDescription>
                  <span className="font-semibold">Featured:</span>Developed a
                  MERN stack website that facilitates doctor listings, service
                  browsing, and appointment scheduling, while enabling doctors
                  to coordinate and respond to patient requests effectively.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://github.com/riponmondalbd/poor-doct"}
                    target="_blank"
                  >
                    Code
                  </Link>
                </AlertDialogAction>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear">
                  <Link href={"https://poor-doct.web.app/"} target="_blank">
                    Live Site
                  </Link>
                </AlertDialogAction>
                <AlertDialogCancel className="animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        {/* project 2 bistro boss */}
        <div className="border rounded-md bg-white dark:bg-black dark:border-[#DF5C17] hover:shadow-md p-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  className="rounded-md"
                  src={bistroBossImage}
                  alt="project"
                />
                <h1 className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Bistro Boss
                </h1>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <Image
                  className="rounded-md"
                  src={bistroBossImage}
                  alt="project"
                />
                <AlertDialogTitle className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Bistro Boss
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <span className="font-semibold">Technology:</span> React.js,
                  JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS,
                  Firebase, JWT, Cookie-parser, RESTful APIs
                </AlertDialogDescription>
                <AlertDialogDescription>
                  <span className="font-semibold">Featured:</span>Developed a
                  full MERN stack website where users can view restaurant menus
                  and place orders, while admins can manage, update, delete, and
                  deliver orders, as well as assign admin roles.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={
                      "https://github.com/riponmondalbd/bistro-boss-restaurant-v2"
                    }
                    target="_blank"
                  >
                    Code
                  </Link>
                </AlertDialogAction>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://bistro-boss-restaurant-b46d3.web.app/"}
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </AlertDialogAction>
                <AlertDialogCancel className="animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        {/* project 3 Job Portal*/}
        <div className="border rounded-md bg-white dark:bg-black dark:border-[#DF5C17] hover:shadow-md p-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  className="rounded-md"
                  src={jobPortalImage}
                  alt="project"
                />
                <h1 className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Job Portal
                </h1>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <Image
                  className="rounded-md"
                  src={jobPortalImage}
                  alt="project"
                />
                <AlertDialogTitle className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Job Portal
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <span className="font-semibold">Technology:</span> React.js,
                  JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS,
                  Firebase, JWT, local storage, RESTful APIs
                </AlertDialogDescription>
                <AlertDialogDescription>
                  <span className="font-semibold">Featured:</span>Built a full
                  MERN stack job portal where users can view and apply for jobs,
                  with permission-based access upon login. Each user has a
                  custom dashboard to manage and track activity.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://github.com/riponmondalbd/job-portal"}
                    target="_blank"
                  >
                    Code
                  </Link>
                </AlertDialogAction>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://job-portal-fb670.web.app/"}
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </AlertDialogAction>
                <AlertDialogCancel className="animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        {/* project 4 portfolio*/}
        <div className="border rounded-md bg-white dark:bg-black dark:border-[#DF5C17] hover:shadow-md p-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  className="rounded-md"
                  src={portfolioImage}
                  alt="project"
                />
                <h1 className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Portfolio
                </h1>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <Image
                  className="rounded-md"
                  src={portfolioImage}
                  alt="project"
                />
                <AlertDialogTitle className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Portfolio
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <span className="font-semibold">Technology:</span> Next.Js
                </AlertDialogDescription>
                <AlertDialogDescription>
                  <span className="font-semibold">Featured:</span>Developed a
                  fullstack website that facilitates show my project. It is a
                  portfolio project
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://github.com/riponmondalbd/portfolio"}
                    target="_blank"
                  >
                    Code
                  </Link>
                </AlertDialogAction>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://portfolio-ripon-mondal.vercel.app"}
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </AlertDialogAction>
                <AlertDialogCancel className="animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        {/* project 5 book review*/}
        <div className="border rounded-md bg-white dark:bg-black dark:border-[#DF5C17] hover:shadow-md p-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  className="rounded-md"
                  src={bookReviewImage}
                  alt="project"
                />
                <h1 className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Book Review
                </h1>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <Image
                  className="rounded-md"
                  src={bookReviewImage}
                  alt="project"
                />
                <AlertDialogTitle className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Book Review
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <span className="font-semibold">Technology:</span> HTML, CSS,
                  JavaScript,React.Js,Rechart, React Toastify,React Icons,
                  Tailwind CSS
                </AlertDialogDescription>
                <AlertDialogDescription>
                  <span className="font-semibold">Featured:</span>Developed a
                  fullstack website that facilitates manage book and also review
                  system of books
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://github.com/riponmondalbd/book-review"}
                    target="_blank"
                  >
                    Code
                  </Link>
                </AlertDialogAction>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://book-reviewp.netlify.app/"}
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </AlertDialogAction>
                <AlertDialogCancel className="animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        {/* project 6 dragon News*/}
        <div className="border rounded-md bg-white dark:bg-black dark:border-[#DF5C17] hover:shadow-md p-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="cursor-pointer">
                <Image
                  className="rounded-md"
                  src={dragonNewsPaperImage}
                  alt="project"
                />
                <h1 className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Dragon News
                </h1>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <Image
                  className="rounded-md"
                  src={dragonNewsPaperImage}
                  alt="project"
                />
                <AlertDialogTitle className="text-xl text-center mt-5 font-semibold text-[#DF5C17] text-shadow-2xs">
                  Dragon News
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <span className="font-semibold">Technology:</span> HTML, CSS,
                  JavaScript,React.Js,Rechart, React Toastify,React Icons,Moment
                  Tailwind CSS
                </AlertDialogDescription>
                <AlertDialogDescription>
                  <span className="font-semibold">Featured:</span>Developed a
                  fullstack website that make to based on online e-news paper
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://github.com/riponmondalbd/latest-dragon-news"}
                    target="_blank"
                  >
                    Code
                  </Link>
                </AlertDialogAction>
                <AlertDialogAction className="bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear">
                  <Link
                    href={"https://latest-dragon-news.surge.sh"}
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </AlertDialogAction>
                <AlertDialogCancel className="animate-fade-down animate-once animate-duration-500 animate-ease-linear">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
