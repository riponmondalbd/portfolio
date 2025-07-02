import AboutMe from "@/components/AboutMe/AboutMe";
import BannerSection from "@/components/Banner/Banner";
import PortfolioSection from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <AboutMe />
      <PortfolioSection />
    </div>
  );
}
