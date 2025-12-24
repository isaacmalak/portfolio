"use client";

import gsap from "gsap";
import { ProfileNavBar } from "./ProfileNavBar";
import Particles from "@/components/Particles";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Fira_Code } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import Image from "next/image";
const sourceCodePro = Source_Code_Pro({
  weight: "700",
  subsets: ["latin"],
});
export function MainContent() {
  const boxRef = useRef(null);
  const bgRef = useRef(null);
  useGSAP(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        backgroundColor: "black",
      })
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
    <div ref={bgRef} className="bg-white w-full h-screen flex flex-col">
      <ProfileNavBar />
      <div ref={boxRef} className="w-full  flex-1 relative">
        <Particles
          particleColors={undefined}
          className="absolute inset-0 pointer-events-none"
          particleBaseSize={100}
          particleCount={300}
        />
        <div className=" flex-row items-center px-20 w-full h-full relative top-0 left-0 flex">
          <section className="w-1/2 h-1/2   ">
            <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
              <span
                className={`font-extrabold tracking-widest ${sourceCodePro.className}`}
              >
                Isaac Malak
              </span>
            </h1>
            <p className="text-lg text-white/90 font">
              I&apos;m a passionate software developer specializing in building
              exceptional digital experiences. Welcome to my portfolio!
            </p>
          </section>
          <section className="w-1/2 h-1/2 ">
            <Image
              src="/images/profile3.png"
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-full mx-auto shadow-lg"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
