"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  const [introFinished, setIntroFinished] = useState(false);
  const [loadingNumber, setLoadingNumber] = useState(0);
  useGSAP(
    () => {
      if (!introFinished) {
        const counter = { value: 0 };
        gsap.set(textRef.current, {
          opacity: 0,
        });
        gsap
          .timeline()
          .to(boxRef.current, {
            width: "15vw",
            height: "15vw",
            borderRadius: 0,
            duration: 1,
          })
          .to(boxRef.current, {
            width: "100vw",
            height: "100vh",
            duration: 0.5,
          })
          .to(textRef.current, {
            opacity: 1,
            duration: 0.5,
          })
          .to(counter, {
            duration: 4,
            value: 99,
            ease: "circ.out",
            onUpdate: () => setLoadingNumber(Math.round(counter.value)),
          })
          .to(counter, {
            duration: 1,
            value: 100,
            onUpdate: () => setLoadingNumber(Math.round(counter.value)),
          })
          .to(textRef.current, {
            opacity: 0,
            ease: "power3.out",
          })
          .fromTo(
            contentRef.current,
            {
              autoAlpha: 0,
              scale: 0.9,
            },

            {
              autoAlpha: 1,
              scale: 1,
            }
          )
          .fromTo(
            contentRef.current,
            {
              scale: 1,
            },
            {
              scale: 0,
              x: "-100vw",
              y: "-100vh",
              duration: 2,
              ease: "power3.inOut",
            }
          );
      }
      // if (introFinished) {
      //   gsap.fromTo(
      //     contentRef.current,
      //     {
      //       opacity: 0,
      //       scale: 0.9,
      //     },
      //     {
      //       opacity: 1,
      //       scale: 1,
      //     }
      //   );
      // }
    },
    { scope: boxRef }
  );

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <div
        ref={boxRef}
        className="relative rounded-3xl bg-white h-0 overflow-hidden"
      >
        <div
          ref={contentRef}
          className="w-full h-full flex justify-center items-center invisible "
        >
          <h1 className="text-4xl font-bold text-black ">Welcome</h1>
        </div>
        <div
          ref={textRef}
          className="text-black left-0 bottom-0 absolute text-6xl font-bold flex justify-center items-center will-change-transform"
        >
          {loadingNumber}
        </div>
      </div>
    </main>
  );
}
