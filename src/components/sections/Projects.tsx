import { portfolio } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Projects() {
  const featured = portfolio.projects.filter((p) => p.featured).slice(0, 3);
  
  return (
    <section className="pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
      <div className="main-container grid gap-y-[4.5rem] sm:gap-y-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-2">Projects</h2>
          <Button variant="outline" asChild>
            <Link href="/projects">View all</Link>
          </Button>
        </div>
        
        <div className="grid gap-y-[4.5rem] sm:gap-y-20">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}