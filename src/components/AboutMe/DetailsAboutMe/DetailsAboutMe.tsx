import { RiNextjsLine, RiReactjsFill } from "react-icons/ri";

export default function DetailsAboutMe() {
  return (
    <div className="space-y-5 ">
      {/* about subheading section title */}
      <h3 className="text-xl font-semibold text-[#DF5C17] text-shadow-2xs">
        About Me
      </h3>
      {/* about heading section */}
      <h1 className="text-5xl text-shadow-2xs font-semibold ">
        Ripon Mondal{" "}
        <span className="text-xl text-[#DF5C17]">[Web Developer]</span>
      </h1>
      {/* content */}
      <p>
        Passionate Web Developer with a strong foundation in JavaScript,
        React.js, Next.js, front-end and back-end development. Skilled in
        building dynamic, user-friendly web applications using modern frameworks
        and tools.
      </p>
      <p>
        Enthusiastic about learning new technologies and delivering high-quality
        code. Aspiring to be part of a professional setting where my skills can
        be amplified and executed effectively.
      </p>
      {/* stack base section */}
      <div className="grid md:grid-cols-2 gap-8 justify-between xl:pt-10">
        {/* mern stack */}
        <div className="border-2 p-4 rounded-md space-y-5 hover:bg-neutral-400/5 dark:border-[#DF5C17] hover:backdrop-blur-3xl">
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
        <div className="border-2 p-4 rounded-md space-y-5 hover:bg-neutral-400/5 dark:border-[#DF5C17] hover:backdrop-blur-3xl">
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
    </div>
  );
}
