import Link from "next/link";
import { CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  index?: number;
  variant?: "featured" | "list";
};

export function ProjectCard({ project, index = 0, variant = "featured" }: ProjectCardProps) {
  // For list view, use simple grid
  if (variant === "list") {
    return (
      <Link href={`/projects/${project.id}`} className="group block">
        <div className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all">
          <div className="relative aspect-video w-full overflow-hidden bg-muted">
            <ImageWithFallback
              src={project.coverImage}
              alt={`Thumbnail of ${project.title} project`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-6">
            <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
              {project.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Featured view with alternating layout
  const isEven = index % 2 === 0;
  
  return (
    <article className="group flex flex-col gap-y-8 sm:grid sm:grid-cols-12 sm:items-center sm:gap-x-2.5 lg:gap-x-[1.875rem] sm:[&>*]:row-start-1">
      <div className={`relative h-72 w-full sm:col-span-6 sm:h-[19.625rem] lg:h-[31.25rem] ${isEven ? "" : "sm:col-start-7"}`}>
        <Link href={`/projects/${project.id}`} className="block h-full w-full">
          <ImageWithFallback
            src={project.coverImage}
            alt={`Thumbnail of ${project.title} project`}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw"
          />
        </Link>
      </div>
      
      <div className={`flex flex-col items-start gap-6 border-y border-border py-6 sm:col-span-5 sm:col-start-8 sm:pb-12 sm:pt-8 lg:col-span-4 lg:col-start-8 lg:h-full lg:justify-center ${isEven ? "" : "sm:col-start-1 lg:col-start-2"}`}>
        <Link href={`/projects/${project.id}`}>
          <CardTitle className="heading-2 text-2xl sm:text-3xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </Link>
        <p className="text-[0.9375rem] sm:text-base text-muted-foreground leading-relaxed">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <Link href={`/projects/${project.id}`}>
          <Button variant="outline" size="lg">
            View Project
          </Button>
        </Link>
      </div>
    </article>
  );
}