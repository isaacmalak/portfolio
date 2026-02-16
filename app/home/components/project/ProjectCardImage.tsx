"use client";

import { AnimatedImage } from "@/components/AnimatedImage";

export function ProjectCardImage({ imageSrc }: { imageSrc?: string }) {
  if (!imageSrc) return null;

  return (
    <div className="relative">
      <AnimatedImage
        src={imageSrc}
        alt="Project Logo"
        width={500}
        height={250}
        className={`z-50 h-40 rounded-3xl border-0 border-transparent object-scale-down p-3`}
      />
    </div>
  );
}
