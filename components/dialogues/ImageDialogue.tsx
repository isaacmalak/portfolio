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
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useImperativeHandle(ref, () => dialogRef.current!);

  const [closing, setClosing] = useState<boolean>();

  useGesture(
    {
      onWheel: ({ delta }) => {
        setScale((prev) => {
          const newScale = prev - delta[1] * 0.0009;

          // Puts the limit of the scale between 1 and 2, this is to prevent the image from being too small or too big
          const scale = Math.min(Math.max(newScale, 1), 2);
          if (scale == 1) {
            setOffset({ x: 0, y: 0 });
          }

          return scale;
        });
      },
      onDrag: ({ offset, event }) => {
        event.preventDefault();
        setOffset({ x: offset[0], y: offset[1] });
      },
    },
    {
      target: imageRef,
      eventOptions: { passive: false },
      drag: {
        from: () => (scale === 1 ? [0, 0] : [offset.x, offset.y]),
      },
    },
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
              setScale(1);
              setOffset({ x: 0, y: 0 });
              setClosing(true);
              document.body.style.overflow = "";
              dialogRef.current?.close();
            },
          });
        }
      }}
    >
      <div
        className="relative touch-none overflow-hidden rounded-xl transition-transform md:h-[90vh] md:w-[90vw] md:rounded-3xl"
        ref={imageRef}
      >
        <Image
          src={image}
          style={{
            transform: `scale(${scale})`,
            left: offset.x,
            top: offset.y,
          }}
          width={1920}
          height={1080}
          alt=""
          quality={100}
          className="relative rounded-xl duration-400 md:rounded-3xl"
        />
      </div>
    </dialog>
  );
}
