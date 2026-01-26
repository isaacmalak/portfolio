"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Ref } from "react";

export function ImageDialogue({
  ref,
  image,
}: {
  ref: Ref<HTMLDialogElement>;
  image: string;
}) {
  useGSAP(() => {});
  return (
    <dialog
      ref={ref}
      className="backdrop:bg-black/40 m-auto border-0 bg-transparent "
      onClick={(e) => {
        console.log("closing");
        (e.currentTarget as HTMLDialogElement).close();
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Image
          src={image}
          width={1920}
          height={1080}
          alt=""
          quality={100}
          className=" max-h-[90vh] max-w-[90vw] "
        />
      </div>
    </dialog>
  );
}
