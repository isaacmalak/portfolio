import { ImageDialogue } from "@/components/dialogues/ImageDialogue";
import Image from "next/image";
import { useRef, useState } from "react";

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
  const [aspectRatio, setAspectRatio] = useState<number>();

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const { naturalWidth, naturalHeight } = img;
    const aspectRatio = naturalWidth / naturalHeight;

    setAspectRatio(aspectRatio);
  };
  const isLoaded = aspectRatio !== undefined && aspectRatio !== null;
  return (
    <>
      <img src={image} style={{ display: "none" }} onLoad={handleLoad} />

      <ImageDialogue ref={dialogRef} image={image} aspectRatio={aspectRatio} />

      <button
        onClick={onClick}
        className={`pointer-events-auto relative z-10 origin-right cursor-pointer overflow-hidden rounded-xl transition-transform duration-400 hover:z-100 hover:scale-110 md:rounded-2xl ${
          !isLoaded
            ? "opacity-0"
            : aspectRatio && aspectRatio < 1
              ? "absolute -left-20 w-40"
              : "w-70"
        } `}
      >
        <Image
          src={image}
          alt=""
          width={500}
          height={500}
          onLoad={handleLoad}
          className="relative z-50 rounded-2xl border-0 object-scale-down"
        />
      </button>
    </>
  );
}
