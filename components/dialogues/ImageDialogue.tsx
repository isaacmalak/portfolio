"use client";

import { useGesture } from "@use-gesture/react";
import gsap from "gsap";
import Image from "next/image";
import { Ref, useEffect, useImperativeHandle, useRef, useState } from "react";

export function ImageDialogue({
  ref,
  image,
  aspectRatio,
}: {
  ref: Ref<HTMLDialogElement>;
  image: string;
  aspectRatio?: number;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isTap, setIsTap] = useState(false);

  useImperativeHandle(ref, () => dialogRef.current!);

  const [closing, setClosing] = useState<boolean>();

  // Prevent Safari/Webkit proprietary gesture events from interfering with onPinch.
  // React doesn't support GestureEvents, so without this, the browser intercepts
  // pinch gestures before @use-gesture can process them.
  useEffect(() => {
    const preventGesture = (e: Event) => e.preventDefault();
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);
    return () => {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
    };
  }, []);

  useGesture(
    {
      onWheel: ({ delta }) => {
        setScale((prev) => {
          const newScale = prev - delta[1] * 0.0009;

          // Puts the limit of the scale between 1 and 3
          const scale = Math.min(Math.max(newScale, 1), 3);

          if (prev > 1 && scale == 1) {
            setOffset({ x: 0, y: 0 });
            setIsTap(true);
          }

          setScale(scale);

          return scale;
        });
      },
      onPinch: ({ offset: [d], event }) => {
        event?.preventDefault();

        // offset[0] from onPinch IS the scale factor directly (starts at 1),
        // no need to divide by 100
        const limitedScale = Math.min(Math.max(d, 1), 3);

        if (scale > 1 && limitedScale === 1) {
          setOffset({ x: 0, y: 0 });
        }

        setScale(limitedScale);
      },
      onDrag: ({ offset, event, pinching, cancel }) => {
        // Cancel the drag gesture entirely while a pinch is active —
        // two-finger pinch also moves the center point, which fires drag events
        if (pinching) return cancel();
        setIsTap(false);
        event.preventDefault();
        setOffset({ x: offset[0], y: offset[1] });
      },
    },

    {
      target: dialogRef,
      eventOptions: { passive: false },
      drag: {
        // filterTaps: true,
        from: () => (scale === 1 && isTap ? [0, 0] : [offset.x, offset.y]),
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
    <>
      <dialog
        ref={dialogRef}
        className={`no-scrollbar m-auto max-w-none touch-none overflow-visible rounded-2xl border-0 bg-transparent backdrop:bg-black/40`}
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
          className={`relative touch-none overflow-visible rounded-xl md:rounded-3xl md:transition-transform ${
            aspectRatio && aspectRatio < 1
              ? "h-[80vh] w-auto md:h-[90vh]"
              : "h-fit w-[90vw] md:h-[90vh] md:w-[90vw]"
          }`}
          style={{ aspectRatio: aspectRatio }}
          ref={imageRef}
        >
          {
            <Image
              src={image}
              style={{
                transform: `scale(${scale})`,
                left: offset.x,
                top: offset.y,
                // aspectRatio: aspectRatio ? aspectRatio : undefined,
              }}
              fill
              alt=""
              quality={100}
              priority
              className="rounded-xl object-contain hover:cursor-grab md:rounded-3xl md:duration-200"
            />
          }
        </div>
      </dialog>
    </>
  );
}
