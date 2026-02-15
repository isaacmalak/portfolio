import { Technology } from "@/constants/technologies";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function TechComponent({ tech }: { tech: Technology }) {
  return (
    <Tooltip>
      <TooltipTrigger className="relative z-10 bg-red-400">
        <div className="mx-1 my-3 flex h-9 w-9 items-center justify-center rounded-3xl border-0 transition-transform hover:scale-110 md:h-20 md:w-20 md:bg-black md:p-3">
          <Image src={tech.image} width={50} height={50} alt={tech.name} className="bg-amber-300" />
        </div>
      </TooltipTrigger>
      <TooltipContent className="border-1 bg-gray-500">
        {tech.name}
      </TooltipContent>
    </Tooltip>
  );
}
