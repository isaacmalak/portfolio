import { TechComponent } from "@/components/technologies/TechComponent";
import { Project } from "@/constants/projects";
import { technologies, Technology } from "@/constants/technologies";
import Image from "next/image";
import Link from "next/link";
import { ProjectImage } from "./ProjectImage";
import { useEffect, useState } from "react";
import { ProjectDetailsMobileView } from "./mobile/ProjectDetailsMobileView";
import { roboto_mono } from "../Content";

export function ProjectDetails({
  selectedProject,
}: {
  selectedProject: Project;
}) {
  const [media, setMatchMedia] = useState<"desktop" | "mobile">();

  useEffect(() => {
    const matchList = window.matchMedia("(max-width: 768px)");

    const handleChange = (e: MediaQueryListEvent) => {
      setMatchMedia(e.matches ? "mobile" : "desktop");
    };

    setMatchMedia(matchList.matches ? "mobile" : "desktop");
    matchList.addEventListener("change", handleChange);

    return () => matchList.addEventListener("change", handleChange);
  });

  const techList = technologies.filter((tech) =>
    selectedProject.techStackUsed?.includes(tech.name),
  );
  const noImages = selectedProject.images.slice(1).length === 0;
  return media === "desktop" ? (
    <div className="no-scrollbar relative flex max-h-screen w-full flex-row gap-2 overflow-y-scroll px-2">
      {/* Description section */}
      <section
        className={`no-scrollbar flex min-h-[calc(100vh-90px)] w-3/4 flex-col items-start justify-start gap-5 overflow-y-auto px-2 py-12 ${
          noImages && "w-full"
        }`}
      >
        <h1 className={`${selectedProject.titleColor} text-3xl`}>
          {selectedProject.title}
        </h1>
        <p className="pt-3 text-lg text-white">
          {selectedProject.description.map((text, index) => (
            <span key={index} className={text.className?.toString()}>
              {text.text}
            </span>
          ))}
        </p>
        {selectedProject.detailedDescription && (
          <p className="text-lg text-white">
            {selectedProject.detailedDescription.map((text, index) => (
              <span
                key={index}
                className={`${text.className?.toString()} mb-3`}
              >
                {text.text}
              </span>
            ))}
          </p>
        )}
        <div>
          <span className="text-lg font-extrabold text-white">
            Tech Stack & Tools Used:
          </span>
          <br />
          <div className="flex-row bg-white">
            {techList.map((tech) => (
              <TechComponent key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        {selectedProject.link && (
          <>
            <p className="text-lg font-extrabold text-white">Link:</p>
            <Link
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-3xl bg-white p-3"
            >
              <Image
                src={selectedProject?.images[0]}
                alt=""
                width={100}
                priority
                height={100}
                className="h-16 w-auto contain-content"
              />
            </Link>
          </>
        )}
      </section>
      {/*  Images section */}
      {!noImages && (
        <section className="no-scrollbar absolute right-0 h-full max-h-[calc(100vh-50px)] w-1/4 overflow-y-scroll px-5 py-15">
          <div className="sticky">
            <div className="absolute right-0 flex flex-col items-end gap-3">
              {selectedProject.images?.slice(1).map((image, index) => (
                <ProjectImage key={index} image={image} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  ) : (
    <ProjectDetailsMobileView project={selectedProject} techList={techList} />
  );
}
