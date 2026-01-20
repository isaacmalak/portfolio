import { Project } from "@/constants/projects";
import Image from "next/image";

export function ProjectsGrid({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: ({ project }: { project: Project }) => void;
}) {
  return (
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
  );
}
