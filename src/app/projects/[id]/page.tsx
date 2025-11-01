import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type Params = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return portfolio.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  const project = portfolio.projects.find((p) => p.id === id);
  if (!project) return { title: "Project not found" };
  
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailsPage({ params }: Params) {
  const { id } = await params;
  const idx = portfolio.projects.findIndex((p) => p.id === id);
  const project = portfolio.projects[idx];
  
  if (!project) return notFound();

  const prev = portfolio.projects[idx - 1];
  const next = portfolio.projects[idx + 1];

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] w-full overflow-hidden bg-muted">
        <ImageWithFallback
          src={project.images?.hero}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="main-container py-12 max-w-5xl">
        {/* Project Header */}
        <div className="mb-12 space-y-6 border-b border-border pb-8">
          <div>
            <h1 className="heading-2 mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button asChild variant="default" size="lg">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Visit website
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" size="lg">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Project Background */}
        {project.background && (
          <div className="mb-12 space-y-4">
            <h2 className="heading-3">Project Background</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.background}
            </p>
          </div>
        )}

        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="heading-3 mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-1.5 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Preview Images */}
        {project.images?.previews && project.images.previews.length > 0 && (
          <div className="mb-16 space-y-8">
            <h2 className="heading-3">Static Previews</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.images.previews.map((preview, index) => (
                <div
                  key={index}
                  className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted"
                >
                  <ImageWithFallback
                    src={preview}
                    alt={`${project.title} preview ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <Separator className="my-12" />

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-4">
          {prev && (
            <Link
              href={`/projects/${prev.id}`}
              className="group flex flex-col items-start gap-2 p-4 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <span className="text-sm text-muted-foreground">Previous Project</span>
              <span className="font-semibold group-hover:text-primary transition-colors">
                ← {prev.title}
              </span>
            </Link>
          )}
          
          {next && (
            <Link
              href={`/projects/${next.id}`}
              className="group flex flex-col items-end gap-2 p-4 rounded-lg border border-border hover:bg-muted transition-colors ml-auto"
            >
              <span className="text-sm text-muted-foreground">Next Project</span>
              <span className="font-semibold group-hover:text-primary transition-colors">
                {next.title} →
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}