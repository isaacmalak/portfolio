import { TechComponent } from "@/components/technologies/TechComponent";
import { Project } from "@/constants/projects";
import { technologies, Technology } from "@/constants/technologies";
import Image from "next/image";
import Link from "next/link";
import { ProjectImage } from "./ProjectImage";

export function ProjectDetailsMobileView({
  project,
  techList,
}: {
  project: Project;
  techList: Technology[];
}) {
  return (
    <div className="px-5 py-10">
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
        <div className="mb-3 flex-wrap gap-3">
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
            className="flex h-10 w-30 items-center justify-center rounded-xl bg-white/10 px-4 py-3"
          >
            <Image
              src={project?.images[0]}
              alt=""
              width={100}
              height={100}
              className="contain-content"
            />
          </Link>
        </>
      )}
    </div>
  );
}
{
  /* <div className="no-scrollbar relative flex max-h-screen w-full flex-row gap-2 overflow-y-scroll px-5"> */
}
{
  /* Description section */
}
{
  /* <section className="no-scrollbar flex min-h-[calc(100vh-90px)] w-3/4 flex-col items-start justify-start gap-5 overflow-y-auto py-10">
        <h1 className={`${project.titleColor} text-6xl`}>{project.title}</h1>

        {project.detailedDescription && (
          <p className="text-2xl text-white">
            {project.detailedDescription.map((text, index) => (
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
        {project.link && (
          <>
            <p className="text-2xl text-white">Link:</p>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-3xl bg-white/10 px-6 py-3"
            >
              <Image
                src={project?.images[0]}
                alt=""
                width={100}
                height={100}
                className="h-20 w-auto contain-content"
              />
            </Link>
          </>
        )}
      </section>
      {/*  Images section */
}
//   <section className="no-scrollbar absolute right-0 h-full max-h-[calc(100vh-50px)] w-1/4 overflow-y-scroll px-5 py-10">
//     <div className="sticky">
//       <div className="absolute right-0 flex flex-col items-end gap-3">
//         {project.images?.slice(1).map((image, index) => (
//           <ProjectImage key={index} image={image} />
//         ))}
//       </div>
//     </div>
//   </section>
// </div> */}
