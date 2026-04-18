import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import ProjectCard from "@/components/ProjectCard";
import { visibleProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStrip />

      <section
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--content-max-width)",
          padding: "0 var(--content-padding-x)",
        }}
      >
        <div className="flex flex-col">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
