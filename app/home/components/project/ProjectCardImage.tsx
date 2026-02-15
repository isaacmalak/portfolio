"use client";
import { useState } from "react";
import Image from "next/image";

export function ProjectCardImage({ imageSrc }: { imageSrc?: string }) {
  const [hasError, setHasError] = useState(false);

  if (!imageSrc) return null;

  return (
    <Image
      src={imageSrc}
      alt="Project Logo"
      width={150}
      height={75}
      onError={(e) => {
        console.error("Error loading image:", imageSrc, e);
        setHasError(true);
      }}
      className="z-50 h-40 rounded-3xl border-0 border-transparent object-scale-down p-3"
    />
  );
}
