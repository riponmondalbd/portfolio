import HeadingStyle from "../common/HeadingCommon/HeadingStyle";
import DetailsSkills from "./DetailsSkills/DetailsSkills";

export default function Skills() {
  return (
    <div
      id="skills"
      className="max-w-7xl mx-auto scroll-mt-20 duration-1000 px-1 py-10 md:py-32"
    >
      <div>
        <HeadingStyle subHeading="Skills" mainHeading="My Experts Areas" />
        <DetailsSkills />
      </div>
    </div>
  );
}
