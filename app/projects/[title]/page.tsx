import { projects } from "@/constants/projects";
import Image from "next/image";

export default function page({ props }: { props: string }) {
  const title = props;
  const project = projects.find((project) => project.title === title);

  return (
    <main className="flex flex-row ">
      // Left side: project images
      <div className="w-full h-1/3">
        {project?.images?.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt=""
            fill
            className="object-scale-down"
          />
        ))}
      </div>
      // Divider
      <div> </div>
      // Right side: project details
      <div className="w-full"> </div>
    </main>
  );
}
