"use client";
import { useState } from "react";
import Image from "next/image";

export function ProjectCardImage({ imageSrc }: { imageSrc?: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!imageSrc) return null;

  return (
    <div className="relative">
      {isLoading && (
        <div className=" z-50 h-40 absolute inset-0 animate-pulse rounded-3xl bg-gray-500/20" />
      )}
      <Image
        src={imageSrc}
        alt="Project Logo"
        width={500}
        height={250}
        onError={(e) => {
          console.error("Error loading image:", imageSrc, e);
          setHasError(true);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
        className={`z-50 h-40 rounded-3xl border-0 border-transparent object-scale-down p-3 ${isLoading ? "opacity-0" : "opacity-100"
          }`}
      />
    </div>
  );
}
