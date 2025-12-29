"use client";

import { useState } from "react";
import { ProfileIntro } from "./home/components/ProfileIntro";
import { MainContent } from "./home/components/MainContent";
import ReactLenis from "lenis/react";
import Particles from "@/components/Particles";

export default function Home() {
  const [isIntroFinished, setInterFinished] = useState(false);

  return (
    <main className="max-w-screen min-h-screen flex flex-col justify-center items-center bg-black select-none">
      {!isIntroFinished ? (
        <ProfileIntro
          onComplete={() => {
            setInterFinished(true);
          }}
        />
      ) : (
        <>
          <Particles
            particleColors={undefined}
            className="fixed inset-0 pointer-events-none w-full max-w-full "
            particleBaseSize={100}
            particleCount={300}
          />
          <ReactLenis root>
            <MainContent />
          </ReactLenis>
        </>
      )}
    </main>
  );
}
