"use client";

import gsap from "gsap";
import { ProfileNavBar } from "./ProfileNavBar";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export function MainContent() {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  });
  return (
    <div ref={boxRef} className="w-full h-full bg-black">
      <ProfileNavBar />

      <Image
        className="z-0 w-full h-full absolute "
        src={"/images/content_wallpaper.gif"}
        alt=""
        fill
      />
    </div>
  );
}
