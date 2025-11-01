"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Project } from "@/lib/data";

type ProjectsClientProps = {
  projects: Project[];
};

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category || "Web Development"));
    return Array.from(cats);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, projects]);

  return (
    <div className="min-h-screen py-12">
      <div className="main-container">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of projects I've worked on, showcasing my skills in web development,
            design, and problem-solving.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
          
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="flex-wrap h-auto p-1">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="list" />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
