import { Project } from "@/constants/projects";
import { ProjectCardImage } from "./ProjectCardImage";

export function ProjectsGrid({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: ({ project }: { project: Project }) => void;
}) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-3 px-10 py-20 md:grid md:h-full md:grid-cols-2">
      {projects.map((project, index) => (
        //Project Card
        <button
          onClick={() => onSelect({ project })}
          key={index}
          className={`group flex h-auto w-full cursor-pointer flex-col items-center justify-between gap-2 rounded-3xl border-1 border-white/35 p-5 font-extrabold tracking-widest hover:bg-gray-500/20 md:h-50 md:flex-row`}
        >
          <div className="flex flex-col">
            <h2
              className={`pb-5 text-start text-sm text-white md:text-2xl ${project.titleOnHoverColor}`}
            >
              {project.title}
            </h2>
            <div className="text-start">
              {project.description.map((text, index) => (
                <span
                  key={index}
                  className={`inline overflow-hidden text-start text-xs text-white md:text-sm`}
                >
                  {text.text}
                </span>
              ))}
            </div>
          </div>
          <ProjectCardImage imageSrc={project.images?.[0]} />
        </button>
      ))}
    </div>
  );
}
