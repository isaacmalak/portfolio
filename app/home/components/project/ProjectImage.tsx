import { ImageDialogue } from "@/components/dialogues/ImageDialogue";
import Image from "next/image";
import { useRef } from "react";

export function ProjectImage({ image }: { image: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  function onClick() {
    if (!dialogRef.current) return;
    if (typeof dialogRef.current.showModal === "function") {
      dialogRef.current.showModal();
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
  }
  return (
    <>
      <ImageDialogue ref={dialogRef} image={image} />
      <button
        onClick={onClick}
        className="pointer-events-auto relative z-10 origin-right cursor-pointer transition-transform duration-400 hover:z-50 hover:scale-110"
      >
        <Image
          src={image}
          alt=""
          priority
          width={300}
          height={300}
          className="z-50 rounded-xl border-0 object-scale-down md:rounded-2xl"
        />
      </button>
    </>
  );
}
