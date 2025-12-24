"use client";

import gsap from "gsap";
import { ProfileNavBar } from "./ProfileNavBar";
import Particles from "@/components/Particles";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export function MainContent() {
  const boxRef = useRef(null);
  const bgRef = useRef(null);
  useGSAP(() => {
    gsap
      .timeline()
      .to(
        bgRef.current,

        {
          backgroundColor: "black",
        }
      )
      .fromTo(
        boxRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,

          ease: "power3.out",
        }
      );
  });
  return (
    <div ref={bgRef} className="bg-white w-full h-full">
      <div ref={boxRef} className="w-full h-full relative">
        <Particles
          particleColors={undefined}
          className=""
          particleBaseSize={100}
          particleCount={300}
        />
        <div className="fixed top-0 left-0 w-full">
          <ProfileNavBar />
        </div>
      </div>
    </div>
  );
}
