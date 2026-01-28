import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ProfileIntro({ onComplete }: { onComplete: () => void }) {
  const boxRef = useRef(null);
  const loadingNumberRef = useRef(null);
  const textRef = useRef(null);

  const [loadingNumber, setLoadingNumber] = useState(0);
  useGSAP(
    () => {
      const counter = { value: 0 };
      gsap.set(loadingNumberRef.current, {
        opacity: 0,
      });
      gsap
        .timeline({
          onComplete: onComplete,
        })
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
        .to(loadingNumberRef.current, {
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
        .to(loadingNumberRef.current, {
          opacity: 0,
          ease: "power3.out",
        })
        .fromTo(
          textRef.current,
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
          textRef.current,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 1,
            ease: "power3.inOut",
          }
        );
    },

    { scope: boxRef }
  );
  return (
    <div
      ref={boxRef}
      className="relative rounded-3xl bg-white h-0 overflow-hidden"
    >
      <div
        ref={textRef}
        className="w-full h-full flex justify-center items-center invisible "
      >
        <h1 className="text-4xl font-bold text-black ">Welcome</h1>
      </div>
      <div
        ref={loadingNumberRef}
        className="text-black left-0 bottom-0 absolute text-6xl font-bold flex justify-center items-center will-change-transform"
        style={{
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {loadingNumber}
      </div>
    </div>
  );
}
