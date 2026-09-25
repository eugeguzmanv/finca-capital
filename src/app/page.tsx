import { AboutSection } from "@/components/home/about-section";
import { BlogPreview } from "@/components/home/blog-preview";
import { ClosingCta } from "@/components/home/closing-cta";
import { EvaluationTeaser } from "@/components/home/evaluation-teaser";
import { GroupSection } from "@/components/home/group-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TransparencySection } from "@/components/home/transparency-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { VideoStorySection } from "@/components/home/video-story-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <GroupSection />
      <ProjectsSection />
      <TestimonialsSection />
      <VideoStorySection />
      <TransparencySection />
      <EvaluationTeaser />
      <BlogPreview />
      <ClosingCta />
    </main>
  );
}
