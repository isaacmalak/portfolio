import { Project } from "@/constants/projects";
import Image from "next/image";

export function ProjectDetails({
  selectedProject,
}: {
  selectedProject: Project;
}) {
  return (
    <div className="w-full flex-row flex gap-2 max-h-[calc(100vh-10px)] overflow-y-scroll px-5 py-10 no-scrollbar">
      {/* Description section */}
      <section className="w-3/4 flex flex-col items-start justify-start gap-5 min-h-[calc(100vh-90px)] ">
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
        {selectedProject.detailedDescription && (
          <p className="text-2xl text-white">
            {selectedProject.detailedDescription.map((text, index) => (
              <span key={index} className={text.className?.toString()}>
                {text.text}
              </span>
            ))}
          </p>
        )}
      </section>
      {/* Divider */}
      {/* <div className="w-0.5 bg-white/20 rounded-full my-20" /> */}
      {/*  Images section */}
      <section className=" w-1/4 absolute right-0 top-0 h-full px-5">
        <div
          className="flex flex-col gap-3 my-20 overflow-y-scroll no-scrollbar "
          style={{ maxHeight: "calc(100vh - 130px)" }}
        >
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
  );
}
