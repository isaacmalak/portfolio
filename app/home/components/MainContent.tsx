"use client";

import gsap from "gsap";
import { ProfileNavBar } from "./ProfileNavBar";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Content, roboto_mono } from "./Content";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function MainContent() {
  const mainContainerRef = useRef(null);
  const personalContentRef = useRef(null);
  const bgRef = useRef(null);
  const projectsRef = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            snap: {
              snapTo: 1, // 1 means it will snap to the end of the timeline (the second div) or the start (first div)
              duration: { min: 0.2, max: 0.8 }, // duration of the snap
              ease: "power1.inOut", // smoothness of the snap
              delay: 0, // wait time before snapping
            },
          },
        })
        .to(bgRef.current, {
          backgroundColor: "black",
        })
        .fromTo(
          personalContentRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power3.out",
          }
        );
    },
    { scope: mainContainerRef }
  );
  return (
    <div ref={mainContainerRef} className="flex flex-col w-full min-h-screen">
      <div ref={bgRef} className="bg-white min-h-screen flex flex-col">
        <ProfileNavBar />
        <Content boxRef={personalContentRef} />
      </div>
      <div
        ref={projectsRef}
        className="min-h-screen text-center flex justify-center items-center bg-gray-900"
      >
        <p className={`text-6xl font-extrabold ${roboto_mono.className}`}>
          Isn&apos;t this portfolio enough?
        </p>
      </div>
    </div>
  );
}
