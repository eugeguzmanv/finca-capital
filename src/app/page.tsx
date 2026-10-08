import { AboutSection } from "@/components/home/about-section";
import { BlogPreview } from "@/components/home/blog-preview";
import { CapitalPreview } from "@/components/home/capital-preview";
import { ClosingCta } from "@/components/home/closing-cta";
import { HeroSection } from "@/components/home/hero-section";
import { ModelPreview } from "@/components/home/model-preview";
import { ProjectsSection } from "@/components/home/projects-section";
import { RespaldoSection } from "@/components/home/respaldo-section";
import { SolutionsPreview } from "@/components/home/solutions-preview";
import { VisionSection } from "@/components/home/vision-section";
import { WhySection } from "@/components/home/why-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhySection />
      <AboutSection />
      <VisionSection />
      <SolutionsPreview />
      <ModelPreview />
      <RespaldoSection />
      <ProjectsSection />
      <CapitalPreview />
      <BlogPreview />
      <ClosingCta />
    </main>
  );
}
