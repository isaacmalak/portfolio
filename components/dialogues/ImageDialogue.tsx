"use client";

import { useGesture } from "@use-gesture/react";
import gsap from "gsap";
import Image from "next/image";
import { Ref, useEffect, useImperativeHandle, useRef, useState } from "react";

type offset = {
  x: number;
  y: number;
};
export function ImageDialogue({
  ref,
  image,
}: {
  ref: Ref<HTMLDialogElement>;
  image: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef(null);
  const [scale, setScale] = useState(1);

  useImperativeHandle(ref, () => dialogRef.current!);

  const [closing, setClosing] = useState<boolean>();

  useGesture(
    {
      onWheel: ({ delta }) => {
        setScale((prev) => {
          const newScale = prev - delta[1] * 0.0009;
          return Math.min(Math.max(newScale, 0.95), 2); // Limit scale between 0.5 and 3
        });
      },
    },
    { target: imageRef },
  );

  const onOpen = () => {
    gsap.fromTo(
      dialogRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
    );
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    console.log("animating image dialogue");

    const observer = new MutationObserver(() => {
      if (closing) return;
      if (dialogRef.current?.open) {
        onOpen();
      }
    });

    observer.observe(dialogRef.current!, {
      attributes: true,
      attributeFilter: ["open"],
    });

    return () => {
      observer.disconnect();

      // This is a safe guard in case of the overflow isn't set properly
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="m-auto border-0 bg-transparent backdrop:bg-black/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          gsap.to(dialogRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              setClosing(true);
              document.body.style.overflow = "";
              dialogRef.current?.close();
            },
          });
        }
      }}
    >
      <div
        className="relative overflow-hidden rounded-xl bg-gray-900/30 transition-transform md:h-[90vh] md:w-[90vw] md:rounded-3xl"
        ref={imageRef}
      >
        <Image
          src={image}
          style={{
            transform: `scale(${scale})`,
          }}
          width={1920}
          height={1080}
          alt=""
          quality={100}
          className="rounded-xl duration-600 md:rounded-3xl"
        />
      </div>
    </dialog>
  );
}
