"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  const [loadingNumber, setLoadingNumber] = useState(0);
  useGSAP(
    () => {
      const counter = { value: 0 };
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
          duration: 1,
          scale: 2,
          opacity: 0,
          ease: "power3.out",
        });
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
          ref={textRef}
          className="text-black left-0 bottom-0 absolute text-6xl font-bold flex justify-center items-center will-change-transform  "
        >
          {loadingNumber}
        </div>
      </div>
    </main>
  );
}
