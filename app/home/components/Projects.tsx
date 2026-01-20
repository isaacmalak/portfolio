"use client";

import { Project } from "@/constants/projects";
import Image from "next/image";
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
      className="w-full flex-1 h-full flex items-center justify-center"
    >
      {selectedProject ? (
        // Project Details
        <div className="w-full flex-row flex gap-2 max-h-screen h-full px-5">
          {/* Description section */}
          <section className="w-3/4">
            <h1 className={`${selectedProject.titleColor} text-6xl`}>
              {selectedProject.title}
            </h1>
            <p className="text-3xl py-3 text-white">
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
              {selectedProject.description.map((text, index) => (
                <span key={index} className={text.className?.toString()}>
                  {text.text}
                </span>
              ))}
            </p>
          </section>
          {/* Divider */}
          <div className="w-0.5 bg-white/20 rounded-full my-20" />
          {/*  Images section */}
          <section className=" w-1/4 ">
            <div className="flex flex-col relative gap-3 overflow-y-scroll max-h-screen">
              {selectedProject.images?.slice(1).map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt=""
                  width={400}
                  height={300}
                  className="z-50 object-contain rounded-3xl border-0 p-3 border-transparent"
                />
              ))}
            </div>
          </section>
        </div>
      ) : (
        //Projects Grid
        <div className="justify-center items-center grid grid-cols-2 gap-3 px-10 relative">
          {projects.map((project, index) => (
            //Project Card
            <button
              onClick={() => onSelect({ project })}
              key={index}
              className={`border-1 border-white/35 p-5 hover:bg-gray-500/20 cursor-pointer gap-2 items-center flex flex-row rounded-3xl w-full justify-between group`}
            >
              <div className="flex flex-col">
                <h2
                  className={`text-4xl text-white font-bold text-start pb-5 ${project.titleOnHoverColor}`}
                >
                  {project.title}
                </h2>
                <div className="text-start">
                  {project.description.map((text) => (
                    <span className="text-start text-white inline text-2xl">
                      {text.text}
                    </span>
                  ))}
                </div>
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
