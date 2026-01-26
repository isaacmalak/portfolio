import Image from "next/image";
import { forwardRef, Ref } from "react";

export const ImageDialogue = forwardRef<HTMLDialogElement, { image: string }>(
  function ImageDialogue({ image }, ref: Ref<HTMLDialogElement>) {
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
);
