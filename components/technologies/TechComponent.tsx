import { Technology } from "@/constants/technologies";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function TechComponent({ tech }: { tech: Technology }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="rounded-3xl mx-2 bg-black my-5 ">
          <Image src={tech.image} width={100} height={100} alt={tech.name} />
        </div>
      </TooltipTrigger>
      <TooltipContent>{tech.name}</TooltipContent>
    </Tooltip>
  );
}
