"use client";

import { useState } from "react";
import { ProfileIntro } from "./home/components/ProfileIntro";
import { MainContent } from "./home/components/MainContent";

export default function Home() {
  const [isIntroFinished, setInterFinished] = useState(false);

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center ">
      {!isIntroFinished ? (
        <ProfileIntro
          onComplete={() => {
            setInterFinished(true);
          }}
        />
      ) : (
        <div className="bg-white w-full h-full">
          <MainContent />
        </div>
      )}
    </main>
  );
}
