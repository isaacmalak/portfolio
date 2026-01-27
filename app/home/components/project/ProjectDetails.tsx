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
    selectedProject.techStackUsed?.includes(tech.name)
  );
  return (
    <div className="w-full flex-row flex gap-2 max-h-screen relative px-5  overflow-y-scroll no-scrollbar ">
      {/* Description section */}
      <section className="w-3/4 flex flex-col py-10 items-start justify-start overflow-y-auto no-scrollbar gap-5 min-h-[calc(100vh-90px)]">
        <h1 className={`${selectedProject.titleColor} text-6xl`}>
          {selectedProject.title}
        </h1>
        <p className="text-2xl pt-3 text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
            </span>
          ))}
        </p>
        <p className="text-2xl pt-3 text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
            </span>
          ))}
        </p>
        <p className="text-2xl pt-3 text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
            </span>
          ))}
        </p>
        <p className="text-2xl pt-3 text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
            </span>
          ))}
        </p>
        <p className="text-2xl pt-3 text-white">
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
          <span className="text-white text-2xl">Tech Stack & Tools Used:</span>
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
              className="flex flex-col items-center justify-center bg-white/10 rounded-3xl px-6 py-3"
            >
              <Image
                src={selectedProject?.images[0]}
                alt=""
                width={100}
                height={100}
                className="w-auto h-20 contain-content"
              />
            </Link>
          </>
        )}
      </section>
      {/* Divider */}
      {/* <div className="w-0.5 bg-white/20 rounded-full my-20" /> */}
      {/*  Images section */}
      <section className=" w-1/4 absolute right-0 py-10 h-full px-5 max-h-[calc(100vh-50px)] overflow-y-scroll no-scrollbar">
        <div className="sticky">
          <div className="flex flex-col gap-3  absolute w-[120%] right-0 items-end">
            {selectedProject.images?.slice(1).map((image, index) => (
              <ProjectImage key={index} image={image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
