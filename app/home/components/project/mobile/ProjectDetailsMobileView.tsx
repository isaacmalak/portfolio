import { TechComponent } from "@/components/technologies/TechComponent";
import { Project } from "@/constants/projects";
import { Technology } from "@/constants/technologies";
import Image from "next/image";
import Link from "next/link";
import { ProjectImageMobileView } from "./ProjectImageMobileView";
import { useEffect } from "react";

export function ProjectDetailsMobileView({
  project,
  techList,
}: {
  project: Project;
  techList: Technology[];
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-screen px-5 py-15">
      {/* Title */}
      <h1 className={`${project.titleColor} text-bold mb-5 text-xl`}>
        {project.title}
      </h1>

      {/* Description */}
      <p className="my-3">
        {project.detailedDescription?.map((paragraph, index) => (
          <span
            key={index}
            className={`${paragraph.className} tet-xl mb-3 text-white`}
          >
            {paragraph.text}
          </span>
        ))}
      </p>
      <br />
      <div>
        <span className="font-bold text-white">Tech Stack & Tools Used:</span>
        <br />
        <div className="mb-3 flex flex-wrap gap-3">
          {techList.map((tech) => (
            <TechComponent key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
      {project.link && (
        <>
          <p className="mb-2 font-bold text-white">Link:</p>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-fit w-28 items-center justify-center rounded-xl bg-white p-3"
          >
            <Image
              src={project?.images[0]}
              alt=""
              width={120}
              height={100}
              className="object-scale-down"
            />
          </Link>
        </>
      )}

      <div className="no-scrollbar mt-8 flex shrink-0 gap-5 overflow-scroll">
        {project.images
          .map((image, index) => (
            <ProjectImageMobileView key={index} image={image} />
          ))
          .slice(1)}
      </div>
    </div>
  );
}
