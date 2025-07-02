import { RiNextjsLine, RiReactjsFill } from "react-icons/ri";
import TimeCounter from "../TimeCounter/TimeCounter";
import { Button } from "../ui/button";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto scroll-mt-20  duration-1000 px-1 py-10 md:py-32"
    >
      <div>
        <div>
          {/* plain text header */}
          <h1 className="text-center pb-10 md:pb-32 text-4xl md:text-5xl font-semibold md:leading-16 ">
            Passionate Web
            <span className="text-[#DF5C17]"> Developer</span> skilled in
            JavaScript, React.js, Next.js, and{" "}
            <span className="text-[#DF5C17]">full-stack</span> development.
          </h1>
        </div>

        {/* blur background */}
        <div className="relative">
          <div
            className="absolute -left-24 bottom-0 md:-bottom-24 w-[400px] h-[400px] rounded-full blur-lg opacity-60 z-[-1]"
            style={{
              background: `
        conic-gradient(
          from 0deg,
          #DF5C17 0deg,                  /* Top-left - Deep */
          rgba(223,92,23,0.4) 90deg,     /* Top-right - Medium */
          rgba(223,92,23,0.05) 180deg,   /* Bottom - Near 0 opacity */
          rgba(223,92,23,0.4) 270deg,    /* Bottom-right - Medium */
          #DF5C17 360deg                 /* Back to Top-left - Deep */
        )
      `,
            }}
          ></div>
          <div className="grid gap-20 lg:grid-cols-2">
            {/* left side content */}
            {/* year month and day counter */}
            <TimeCounter />

            {/* right side content */}
            <div className="space-y-5">
              {/* about subheading section title */}
              <h3 className="text-xl font-semibold text-[#DF5C17] text-shadow-2xs">
                About Me
              </h3>
              {/* about heading section */}
              <h1 className="text-5xl font-semibold ">
                Ripon Mondal{" "}
                <span className="text-xl text-[#DF5C17]">[Web Developer]</span>
              </h1>
              {/* content */}
              <p>
                Passionate Web Developer with a strong foundation in JavaScript,
                React.js, Next.js, front-end and back-end development. Skilled
                in building dynamic, user-friendly web applications using modern
                frameworks and tools. Enthusiastic about learning new
                technologies and delivering high-quality code. Aspiring to be
                part of a professional setting where my skills can be amplified
                and executed effectively.
              </p>
              {/* stack base section */}
              <div className="grid md:grid-cols-2 gap-8 justify-between">
                {/* mern stack */}
                <div className="border-2 p-4 rounded space-y-5 hover:bg-neutral-400/5 hover:backdrop-blur-3xl">
                  <div className="flex items-center gap-2 text-2xl font-semibold">
                    <RiReactjsFill />
                    <h1>MERN Stack</h1>
                  </div>
                  <p className="text-justify">
                    MERN Stack Developer building dynamic web applications using
                    MongoDB, Express, React, and Node.js.
                  </p>
                </div>
                {/* next.js */}
                <div className="border-2 p-4 rounded space-y-5 hover:bg-neutral-400/5 hover:backdrop-blur-3xl">
                  <div className="flex items-center gap-2 text-2xl font-semibold">
                    <RiNextjsLine />
                    <h1>Next.Js</h1>
                  </div>
                  <p className="text-justify">
                    Next.js & MERN Stack Developer building fast, full-stack web
                    applications with MongoDB, Express, Node.js, and Next.js.
                  </p>
                </div>
              </div>
              <div>
                <Button className="cursor-pointer bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear py-6">
                  Details About Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
