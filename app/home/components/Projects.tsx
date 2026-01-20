"use client";

import { Project } from "@/constants/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectDetails } from "./project/ProjectDetails";
import { ProjectsGrid } from "./project/ProjectsGrid";

export function Projects({
  projects,
  projectsRef,
}: {
  projects: Project[];
  projectsRef: React.RefObject<null>;
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function onSelect({ project }: { project: Project }) {
    window.history.pushState(
      { view: "project", projectName: project.title },
      ""
    );
    setSelectedProject(project);
  }

  useEffect(() => {
    window.history.pushState({ view: "grid" }, "");
    const onPopState = (event: PopStateEvent) => {
      console.log(event.state.view);
      if (event.state.view === "project") {
        // Get back to the original grid
        window.history.replaceState({ view: "grid" }, "", "");
        setSelectedProject(null);
        return;
      }
      if (event.state.view === "grid") {
        const projectName = event.state.projectName;
        window.history.pushState({ view: "project", projectName }, "");

        setSelectedProject(projectName);
        return;
      }
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return (
    <div
      ref={projectsRef}
      className="w-full flex-1 h-full flex items-center justify-center overflow-hidden"
      data-lenis-prevent
    >
      {selectedProject ? (
        // Project Details
        <ProjectDetails selectedProject={selectedProject} />
      ) : (
        //Projects Grid
        <ProjectsGrid projects={projects} onSelect={onSelect} />
      )}
    </div>
  );
}
