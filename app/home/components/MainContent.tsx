"use client";

import gsap from "gsap";
import { ProfileNavBar } from "./ProfileNavBar";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Content, roboto_mono } from "./Content";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      gsap
        .timeline({
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            toggleActions: "play none none none",
            start: "top center",
          },
        })
        .fromTo(
          enoughTextRef.current,
          {
            y: -100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          }
        );
    },
    { scope: mainContainerRef }
  );
  return (
    <div ref={mainContainerRef} className="flex flex-col w-full min-h-screen ">
      <div
        ref={personalInfoRef}
        className="bg-white min-h-screen flex flex-col"
      >
        <ProfileNavBar />
        <Content boxRef={contentRef} />
      </div>
      <div
        ref={projectsSectionRef}
        className="min-h-screen text-center flex justify-center items-center text-white bg-black "
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
