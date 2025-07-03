import DetailsAboutMe from "./DetailsAboutMe/DetailsAboutMe";
import TimeCounter from "./TimeCounter/TimeCounter";

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
          <div className="grid gap-12 md:gap-6 xl:gap-20 lg:grid-cols-2">
            {/* left side content */}
            {/* year month and day counter */}
            <TimeCounter />

            {/* right side content */}
            <DetailsAboutMe />
          </div>
        </div>
      </div>
    </div>
  );
}
