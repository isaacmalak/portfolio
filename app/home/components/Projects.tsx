"use client";

import { Project } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
      { projectName: project.title },
      "",
      `/projects/${project.title}`
    );
    setSelectedProject(project);
  }

  function onPop() {
    window.history.back();
    setSelectedProject(null);
  }

  useEffect(() => {
    const onPopState = () => {
      setSelectedProject(null);
    };
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return (
    <div
      ref={projectsRef}
      className="w-full min-h-screen h-full flex items-center justify-center"
    >
      {selectedProject ? (
        //Projects Grid
        <div> </div>
      ) : (
        //Project Details
        <div className="justify-center items-center grid grid-cols-2 gap-3 py-20 px-10 relative">
          {projects.map((project, index) => (
            //Project Card
            <button
              onClick={() => onSelect({ project })}
              key={index}
              className={`border-1 p-5 hover:bg-gray-500/20 cursor-pointer gap-2 items-center flex flex-row rounded-3xl w-full justify-between group`}
            >
              <div className="flex flex-col">
                <h2
                  className={`text-4xl text-white font-bold ${project.titleOnHoverColor}`}
                >
                  {project.title}
                </h2>
                <p className="text-2xl text-gray-400">{project.description} </p>
              </div>
              <Image
                src={project.images?.[0] || "/placeholder.png"}
                alt=""
                width={150}
                height={75}
                className="rounded-3xl border-0 h-40 p-3 border-transparent z-50 object-scale-down"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
