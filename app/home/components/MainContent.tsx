"use client";

import gsap from "gsap";
import { ProfileNavBar } from "./ProfileNavBar";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Content, roboto_mono } from "./Content";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "@/components/Particles";
import TextPlugin from "gsap/TextPlugin";
import { Projects } from "./Projects";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { projects } from "@/constants/projects";

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

export function MainContent() {
  const mainContainerRef = useRef(null);

  // Refs for first section animations
  const contentRef = useRef(null);
  const personalInfoRef = useRef(null);

  // Refs for second section animations
  const projectsSectionRef = useRef(null);
  const enoughTextRef = useRef(null);
  const coffeeRef = useRef(null);
  const projectsRef = useRef(null);

  // state for projects section animation
  const [isProjectsVisible, setProjectsVisibility] = useState(false);
  useGSAP(
    () => {
      gsap.fromTo(
        coffeeRef.current,
        {
          color: "#6B3F13", // Medium-dark brown (lighter than before)
        },
        {
          color: "#A0522D", // Sienna (lighter brown)
          duration: 0.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      gsap.to(personalInfoRef.current, {
        opacity: 1,
      });

      gsap.timeline().fromTo(
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
        animation: gsap
          .timeline({ onComplete: () => setProjectsVisibility(true) })
          .fromTo(
            enoughTextRef.current,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 1.5,
              ease: "power3.out",
            }
          )
          .to(enoughTextRef.current, {
            text: {
              value: "Just kidding, check out my projects!",
              newClass: "text-black",
            },
            duration: 1.5,
            ease: "none",
            delay: 0.5,
          })
          .to(enoughTextRef.current, {
            duration: 1,
            ease: "power3.out",
            opacity: 0,
          }),
      });
    },
    { scope: mainContainerRef }
  );

  useGSAP(
    () => {
      if (isProjectsVisible && projectsRef.current) {
        gsap.fromTo(
          projectsRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            onComplete: () => {
              gsap.to(window, { duration: 0.5, scrollTo: "#projects" });
            },
          }
        );
      }
    },
    { dependencies: [isProjectsVisible], scope: mainContainerRef }
  );
  return (
    <div
      ref={mainContainerRef}
      className={`flex flex-col w-full min-h-screen bg-[#151515] ${roboto_mono.className}`}
      id="projects"
    >
      <ProfileNavBar />
      <Particles
        particleColors={undefined}
        className="fixed inset-0 pointer-events-none w-full max-w-full z-50"
        particleBaseSize={100}
        particleCount={350}
      />
      {isProjectsVisible ? (
        <Projects projects={projects} projectsRef={projectsRef} />
      ) : (
        <>
          <div
            ref={personalInfoRef}
            className="opacity-0 h-screen flex flex-col"
          >
            <Content boxRef={contentRef} coffeeRef={coffeeRef} />
          </div>
          <div
            ref={projectsSectionRef}
            className="h-screen text-center flex justify-center items-center text-white bg-rgba(31, 41, 55, 0.7) relative z-0"
          >
            <p ref={enoughTextRef} className={`text-6xl font-extrabold `}>
              Isn&apos;t this portfolio enough?
            </p>
          </div>
        </>
      )}
    </div>
  );
}
