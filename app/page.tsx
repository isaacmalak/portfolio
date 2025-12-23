"use client";

import { useState } from "react";
import { ProfileIntro } from "./home/components/HomeIntro";

export default function Home() {
  const [isIntroFinished, setInterFinished] = useState(false);

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      {!isIntroFinished ? (
        <ProfileIntro
          onComplete={() => {
            setInterFinished(true);
          }}
        />
      ) : (
        <div> Intro Finished </div>
      )}
    </main>
  );
}
