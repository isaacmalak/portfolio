"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Ref, useEffect, useImperativeHandle, useRef } from "react";

export function ImageDialogue({
  ref,
  image,
}: {
  ref: Ref<HTMLDialogElement>;
  image: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => dialogRef.current!);

  useEffect(() => {
    console.log("animating image dialogue");
    const onOpen = () => {
      gsap.fromTo(
        dialogRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    };
    const observer = new MutationObserver(() => {
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
      className="backdrop:bg-black/40 m-auto border-0 bg-transparent"
      onClick={(e) => {
        console.log("closing");
        if (e.target === e.currentTarget) {
          (e.currentTarget as HTMLDialogElement).close();
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
