import { TechComponent } from "@/components/technologies/TechComponent";
import { Project } from "@/constants/projects";
import { technologies, Technology } from "@/constants/technologies";
import Image from "next/image";
import Link from "next/link";
import { ProjectImage } from "./ProjectImage";

export function ProjectDetails({
  selectedProject,
}: {
  selectedProject: Project;
}) {
  const techList = technologies.filter((tech) =>
    selectedProject.techStackUsed?.includes(tech.name),
  );
  return (
    <div className="no-scrollbar relative flex max-h-screen w-full flex-row gap-2 overflow-y-scroll px-5">
      {/* Description section */}
      <section className="no-scrollbar flex min-h-[calc(100vh-90px)] w-3/4 flex-col items-start justify-start gap-5 overflow-y-auto py-10">
        <h1 className={`${selectedProject.titleColor} text-6xl`}>
          {selectedProject.title}
        </h1>
        <p className="pt-3 text-2xl text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
            </span>
          ))}
        </p>
        <p className="pt-3 text-2xl text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
            </span>
          ))}
        </p>
        <p className="pt-3 text-2xl text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
              {text.text}
              {text.text}
            </span>
          ))}
        </p>
        <p className="pt-3 text-2xl text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
            </span>
          ))}
        </p>
        <p className="pt-3 text-2xl text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
            </span>
          ))}
        </p>
        {selectedProject.detailedDescription && (
          <p className="text-2xl text-white">
            {selectedProject.detailedDescription.map((text, index) => (
              <span key={index} className={text.className?.toString()}>
                {text.text}
              </span>
            ))}
          </p>
        )}
        <div>
          <span className="text-2xl text-white">Tech Stack & Tools Used:</span>
          <br />
          <div className="flex gap-3">
            {techList.map((tech) => (
              <TechComponent key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        {selectedProject.link && (
          <>
            <p className="text-2xl text-white">Link:</p>
            <Link
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-3xl bg-white/10 px-6 py-3"
            >
              <Image
                src={selectedProject?.images[0]}
                alt=""
                width={100}
                height={100}
                className="h-20 w-auto contain-content"
              />
            </Link>
          </>
        )}
      </section>
      {/*  Images section */}
      <section className="no-scrollbar absolute right-0 h-full max-h-[calc(100vh-50px)] w-1/4 overflow-y-scroll px-5 py-10">
        <div className="sticky">
          <div className="absolute right-0 flex flex-col items-end gap-3">
            {selectedProject.images?.slice(1).map((image, index) => (
              <ProjectImage key={index} image={image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
