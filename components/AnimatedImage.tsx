import { useGSAP } from "@gsap/react";
import clsx, { ClassValue } from "clsx";
import gsap from "gsap";
import Image from "next/image";
import { ReactEventHandler, useRef, useState } from "react";

type ImageLayout = { fill: true } | { height: number; width: number };

type AnimatedImageProps = {
  src: string;
  alt: string;
  className?: ClassValue;
  onError?: ReactEventHandler<HTMLImageElement> | undefined;
  onLoad?: ReactEventHandler<HTMLImageElement> | undefined;
} & ImageLayout;

export function AnimatedImage(props: AnimatedImageProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const key = `$animated:${props.src}`;

  useGSAP(() => {
    if (sessionStorage.getItem(key) === "true") return;
    console.log("Animating image:", props.src);
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
          sessionStorage.setItem(key, "true");
        },
      },
    );
  });
  return <Image ref={imageRef} {...props} className={clsx(props.className)} />;
}
