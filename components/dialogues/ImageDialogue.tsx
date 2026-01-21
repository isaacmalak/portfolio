import { Ref } from "react";

export function ImageDialogue({ ref }: { ref: Ref<HTMLDialogElement> }) {
  return <dialog ref={ref}>Dialogue contents</dialog>;
}
