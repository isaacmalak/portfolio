"use client";

import gsap from "gsap";
import { ProfileNavBar } from "./ProfileNavBar";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Content, roboto_mono } from "./Content";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "@/components/Particles";

gsap.registerPlugin(ScrollTrigger);

export function MainContent() {
  const mainContainerRef = useRef(null);

  // Refs for first section animations
  const contentRef = useRef(null);
  const personalInfoRef = useRef(null);

  // Refs for second section animations
  const projectsSectionRef = useRef(null);
  const enoughTextRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(personalInfoRef.current, {
        backgroundColor: "black",
      });
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        }
      );
      ScrollTrigger.create({
        trigger: projectsSectionRef.current,
        start: "top 30%",
        animation: gsap.fromTo(
          enoughTextRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 4.5,
            ease: "power3.out",
          }
        ),
      });
    },
    { scope: mainContainerRef }
  );
  return (
    <div
      ref={mainContainerRef}
      className="flex flex-col w-full min-h-screen h-full bg-gray-800/70"
    >
      <Particles
        particleColors={undefined}
        className="fixed inset-0 pointer-events-none w-full max-w-full z-50"
        particleBaseSize={100}
        particleCount={300}
      />
      <div ref={personalInfoRef} className="bg-white h-screen flex flex-col">
        <ProfileNavBar />
        <Content boxRef={contentRef} />
      </div>
      <div
        ref={projectsSectionRef}
        className="h-screen text-center flex justify-center items-center text-white relative z-0"
      >
        <p
          ref={enoughTextRef}
          className={`text-6xl font-extrabold ${roboto_mono.className}`}
        >
          Isn&apos;t this portfolio enough?
        </p>
      </div>
    </div>
  );
}
