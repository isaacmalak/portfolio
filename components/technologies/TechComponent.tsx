import { Technology } from "@/constants/technologies";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

export function TechComponent({ tech }: { tech: Technology }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <TooltipContent>
          <div className="rounded-3xl bg-black ">
            <Image src={tech.image} fill alt={tech.name} />
          </div>
        </TooltipContent>
      </TooltipTrigger>
    </Tooltip>
  );
}
