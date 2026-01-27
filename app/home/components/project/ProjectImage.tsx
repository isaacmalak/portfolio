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
        className="cursor-pointer hover:scale-110 duration-400 transition-transform hover:z-50 origin-right z-10 relative pointer-events-auto"
      >
        <Image
          src={image}
          alt=""
          width={300}
          height={300}
          className="z-50 object-scale-down rounded-3xl border-0 p-3"
        />
      </button>
    </>
  );
}
