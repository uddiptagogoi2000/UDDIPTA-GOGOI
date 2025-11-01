import { ProjectsClient } from "@/components/sections/ProjectsClient";
import { portfolio } from "@/lib/data";

export default function ProjectsPage() {
  return <ProjectsClient projects={portfolio.projects} />;
}