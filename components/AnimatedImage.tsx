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
  const isAnimated = sessionStorage.getItem(key) === "true"

  useGSAP(() => {
    if (isAnimated && animateOnce) {
      gsap.set(imageRef.current, { opacity: 1 });
      return;
    }
    if (!isLoaded) return;

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
  }, [isLoaded, isAnimated]);

  return (
    <Image
      ref={imageRef}
      {...props}
      className={clsx(props.className)}
      style={{ opacity: 0 }}
      priority
      onLoad={(e) => {
        setIsLoaded(true);
        if (props.onLoad) props.onLoad(e);
      }}
    />
  );
}
