import { Ref } from "react";

export function ImageDialogue({ ref }: { ref: Ref<HTMLDialogElement> }) {
  return <dialog ref={ref} className="backdrop:bg-black/40 "></dialog>;
}
