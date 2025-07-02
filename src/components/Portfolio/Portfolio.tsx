import HeadingStyle from "../common/HeadingCommon/HeadingStyle";
import AllPortfolio from "./AllPortfolio/AllPortfolio";

export default function PortfolioSection() {
  return (
    <div
      id="portfolio"
      className="scroll-mt-20  duration-1000 px-1 py-10 md:py-32 bg-[#f4f4f4] dark:bg-black"
    >
      <div className="max-w-7xl mx-auto ">
        <div>
          {/* heading section */}
          <HeadingStyle
            subHeading="Portfolio"
            mainHeading="Visit My Latest Work"
          />

          {/* all portfolios details */}
          <AllPortfolio />
        </div>
      </div>
    </div>
  );
}
