import { Technology } from "@/constants/technologies";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function TechComponent({ tech }: { tech: Technology }) {
  return (
    <Tooltip>
      <TooltipTrigger className="z-10 relative">
        <div className="rounded-3xl bg-black my-5 inline-block p-3 border-0 hover:scale-110 transition-transform">
          <Image src={tech.image} width={50} height={50} alt={tech.name} />
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-gray-500 border-1 ">
        {tech.name}
      </TooltipContent>
    </Tooltip>
  );
}
