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
          <h1 className="text-center py-10 md:py-32 text-4xl md:text-5xl font-semibold md:leading-16 ">
            Passionate Web Developer{" "}
            <span className="text-[#DF5C17]">skilled</span> in JavaScript,
            React.js, Next.js, and{" "}
            <span className="text-[#DF5C17]">full-stack</span> development.
            Eager to learn, build dynamic website, and{" "}
            <span className="text-[#DF5C17]">contribute</span> in a professional
            environment.
          </h1>
        </div>

        <div className="grid gap-20 lg:grid-cols-2">
          {/* left side content */}
          {/* year month and day counter */}
          <TimeCounter />

          {/* right side content */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-[#DF5C17] text-shadow-2xs">
              About Me
            </h3>
            {/* plain text header */}
            <h1 className="text-5xl font-semibold ">
              Ripon Mondal{" "}
              <span className="text-xl text-[#DF5C17]">[Web Developer]</span>
            </h1>
            <p>
              Passionate Web Developer with a strong foundation in JavaScript,
              React.js, Next.js, front-end and back-end development. Skilled in
              building dynamic, user-friendly web applications using modern
              frameworks and tools. Enthusiastic about learning new technologies
              and delivering high-quality code. Aspiring to be part of a
              professional setting where my skills can be amplified and executed
              effectively.
            </p>
            <div className="grid md:grid-cols-2 gap-8 justify-between">
              <div className="border-2 p-4 rounded space-y-5">
                <div className="flex items-center gap-2 text-2xl">
                  <RiReactjsFill />
                  <h1>MERN Stack</h1>
                </div>
                <p className="text-justify">
                  MERN Stack Developer building dynamic web applications using
                  MongoDB, Express, React, and Node.js.
                </p>
              </div>
              <div className="border-2 p-4 rounded space-y-5">
                <div className="flex items-center gap-2 text-2xl">
                  <RiNextjsLine />
                  <h1>Next.Js</h1>
                </div>
                <p className="text-justify">
                  Next.js & MERN Stack Developer building fast, full-stack web
                  applications with MongoDB, Express, Node.js, and Next.js.
                </p>
              </div>
            </div>
            <Button className="cursor-pointer bg-[#DF5C17] dark:text-white dark:hover:text-black animate-fade-up animate-once animate-duration-500 animate-ease-linear py-6">
              Details About Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
