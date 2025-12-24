"use client";

import { useState } from "react";
import { ProfileIntro } from "./home/components/ProfileIntro";
import { MainContent } from "./home/components/MainContent";

export default function Home() {
  const [isIntroFinished, setInterFinished] = useState(false);

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-black">
      {!isIntroFinished ? (
        <ProfileIntro
          onComplete={() => {
            setInterFinished(true);
          }}
        />
      ) : (
        
          <MainContent />
      )}
    </main>
  );
}
