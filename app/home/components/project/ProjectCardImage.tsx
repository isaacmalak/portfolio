"use client";
import { useState } from "react";
import Image from "next/image";

export function ProjectCardImage({ imageSrc }: { imageSrc?: string }) {
  const [hasError, setHasError] = useState(false);

  if (!imageSrc || hasError) return null; // hide completely

  return (
    <Image
      src={imageSrc}
      alt=""
      width={150}
      height={75}
      onError={() => {
        setHasError(true);
      }}
      priority
      className="z-50 h-40 rounded-3xl border-0 border-transparent object-scale-down p-3"
    />
  );
}
