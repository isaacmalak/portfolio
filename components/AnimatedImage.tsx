import { useGSAP } from "@gsap/react";
import clsx, { ClassValue } from "clsx";
import gsap from "gsap";
import Image from "next/image";
import { ReactEventHandler, useRef, useState } from "react";

type ImageLayout =
  | { fill: true; sizes: string | undefined }
  | { height: number; width: number };

type AnimatedImageProps = {
  src: string;
  alt: string;
  className?: ClassValue;
  onError?: ReactEventHandler<HTMLImageElement> | undefined;
  onLoad?: ReactEventHandler<HTMLImageElement> | undefined;
  animateOnce?: boolean;
} & ImageLayout;

export function AnimatedImage({ animateOnce, ...props }: AnimatedImageProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const key = `$animated:${props.src}`;
  const [isLoaded, setIsLoaded] = useState(false);

  useGSAP(() => {
    if (sessionStorage.getItem(key) === "true" && animateOnce) {
      gsap.set(imageRef.current, { opacity: 0 });
      return;
    }
    if (!isLoaded) return;

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
  }, [isLoaded]);

  return (
    <Image
      ref={imageRef}
      {...props}
      className={clsx(props.className)}
      priority
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
    />
  );
}
