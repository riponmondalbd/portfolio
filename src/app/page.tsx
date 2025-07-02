import AboutMe from "@/components/AboutMe/AboutMe";
import BannerSection from "@/components/Banner/Banner";
import PortfolioSection from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <AboutMe />
      <PortfolioSection />
      <Skills />
    </div>
  );
}
