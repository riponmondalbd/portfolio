import AboutMe from "@/components/AboutMe/AboutMe";
import BannerSection from "@/components/Banner/Banner";
import FooterSection from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <AboutMe />

      <FooterSection />
    </div>
  );
}
