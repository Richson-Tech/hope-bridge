import HeroSection from "@/components/HeroSection";
import Help from "@/components/Help";
import CardsSection from "@/components/CardsSection";
import AboutUsSection from "@/components/About";
import CampaignSection from "@/components/CampaingSection";
import BlogSection from "@/components/BlogSection";
import CharitySection from "@/components/Charity";
import TeamSection from "@/components/Team";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Help />
      <CardsSection />
      <AboutUsSection />
      <CampaignSection />
      <BlogSection />
      <TeamSection />
      <CharitySection />
    </main>
  );
}
