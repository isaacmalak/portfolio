"use client";

import gsap from "gsap";
import Image from "next/image";
import { Ref, useEffect, useImperativeHandle, useRef, useState } from "react";

export function ImageDialogue({
  ref,
  image,
}: {
  ref: Ref<HTMLDialogElement>;
  image: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => dialogRef.current!);

  const [closing, setClosing] = useState<boolean>();

  const onOpen = () => {
    gsap.fromTo(
      dialogRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
    );
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

    return () => observer.disconnect();
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
              dialogRef.current?.close();
            },
          });
        }
      }}
    >
      <div>
        <Image
          src={image}
          width={1920}
          height={1080}
          alt=""
          quality={100}
          className="max-h-[90vh] max-w-[90vw] rounded-3xl"
        />
      </div>
    </dialog>
  );
}
