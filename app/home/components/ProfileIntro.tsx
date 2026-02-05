import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Orbitron } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
  display: "swap",
});

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

      const matchMedia = gsap.matchMedia();
      matchMedia.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
        },
        (context) => {
          const { desktop, mobile } = context.conditions!;
          gsap
            .timeline({
              onComplete: onComplete,
            })
            .to(boxRef.current, {
              width: desktop ? "30vh" : "15vh",
              height: desktop ? "15vh" : "20vh",
              borderRadius: 3,
              duration: 1,
            })
            .to(boxRef.current, {
              width: "100vw",
              height: "100vh",
              duration: 0.5,
              borderRadius: 0,
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
              },
            )
            .fromTo(
              textRef.current,
              {
                opacity: 1,
              },
              {
                opacity: 0,
                duration: 1.5,
                ease: "power3.inOut",
              },
            );
        },
      );
    },

    { scope: boxRef },
  );
  return (
    <div
      ref={boxRef}
      className={`relative h-0 overflow-hidden rounded-3xl bg-white ${orbitron.className}`}
    >
      <div
        ref={textRef}
        className="invisible flex h-full w-full items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-black">Welcome</h1>
      </div>
      <div
        ref={loadingNumberRef}
        className={`absolute bottom-1/12 left-2 flex items-center justify-center text-6xl font-bold text-black will-change-transform md:bottom-0`}
      >
        {loadingNumber}
      </div>
    </div>
  );
}
