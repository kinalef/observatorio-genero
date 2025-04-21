import { HeroSection } from "@/components/sections/HeroSection";
import { PorqueSection } from "@/components/sections/PorqueSection";
import { DatosSection } from "@/components/sections/DatosSection";
import { EnfoqueSection } from "@/components/sections/EnfoqueSection";
import { ImpactoSection } from "@/components/sections/ImpactoSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="font-sans text-gray-800 bg-white">
      <HeroSection />
      <PorqueSection />
      <DatosSection />
      <EnfoqueSection />
      <ImpactoSection />
      <RoadmapSection />
      <FooterSection />
    </main>
  );
}
