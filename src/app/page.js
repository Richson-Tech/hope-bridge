import HeroSection from "@/components/HeroSection";
import Help from "@/components/Help";
import CardsSection from "@/components/CardsSection";
import AboutUsSection from "@/components/About";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Help />
          <CardsSection />
          <AboutUsSection/>
    </main>
  );
}
