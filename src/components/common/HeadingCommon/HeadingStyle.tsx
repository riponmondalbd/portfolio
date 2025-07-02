export default function HeadingStyle({
  subHeading,
  mainHeading,
}: {
  subHeading: string;
  mainHeading: string;
}) {
  return (
    <div>
      <div className="text-center space-y-5">
        {/* skills sub heading section title */}
        <h3 className="text-xl font-semibold text-[#DF5C17] text-shadow-2xs">
          {subHeading}
        </h3>
        {/* portfolio heading section */}
        <h1 className="text-5xl font-semibold ">{mainHeading}</h1>
      </div>
    </div>
  );
}
