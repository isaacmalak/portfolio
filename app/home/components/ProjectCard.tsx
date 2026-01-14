import Image from "next/image";

export function Projects({
  projects,
  projectsRef,
}: {
  projects: any[];
  projectsRef: React.RefObject<null>;
}) {
  return (
    <div
      ref={projectsRef}
      className="w-full min-h-screen h-full justify-center items-center grid grid-cols-2 gap-3 py-20 px-10 relative"
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="border-1 p-5 hover:bg-gray-500/30 cursor-pointer gap-2 flex flex-row rounded-3xl w-full justify-between"
        >
          <div className="flex flex-col">
            <h2
              className="text-4xl text-white 
            font-bold"
            >
              {project.title}
            </h2>
            <p className="text-2xl text-gray-400 ">{project.description} </p>
          </div>
          <Image
            src={"/images/profile3.png"}
            alt=""
            width={200}
            height={200}
            className="rounded-3xl border-0 border-transparent z-50"
          />
        </div>
      ))}
    </div>
  );
}
