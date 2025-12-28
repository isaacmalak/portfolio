"use client";

import { useState } from "react";
import { ProfileIntro } from "./home/components/ProfileIntro";
import { MainContent } from "./home/components/MainContent";
import ReactLenis from "lenis/react";

export default function Home() {
  const [isIntroFinished, setInterFinished] = useState(false);

  return (
    <main className="max-w-screen h-screen flex flex-col justify-center items-center bg-black select-none">
      <ReactLenis root>
        {!isIntroFinished ? (
          <ProfileIntro
            onComplete={() => {
              setInterFinished(true);
            }}
          />
        ) : (
          <MainContent />
        )}
      </ReactLenis>
    </main>
  );
}
