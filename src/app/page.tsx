import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import ProjectCard from "@/components/ProjectCard";
import FadeInSection from "@/components/FadeInSection";
import { visibleProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />

      <FadeInSection>
        <ImpactStrip />
      </FadeInSection>

      <section
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--content-max-width)",
          padding: "0 var(--content-padding-x)",
        }}
      >
        <div className="flex flex-col">
          {visibleProjects.map((project, i) => (
            <FadeInSection key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </section>
    </>
  );
}
