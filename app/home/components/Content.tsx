import Particles from "@/components/Particles";
import { RefObject } from "react";
import { VT323 } from "next/font/google";
import Image from "next/image";

export const roboto_mono = VT323({
  subsets: ["latin"],
  display: "swap", // 'swap' ensures a fallback is used while loading
  weight: "400",
});

export function Content({
  boxRef,
  coffeeRef,
}: {
  boxRef: RefObject<null>;
  coffeeRef: RefObject<null>;
}) {
  return (
    <div ref={boxRef} className="h-screen relative">
      {/* <Particles
        particleColors={undefined}
        className="absolute inset-0 pointer-events-none w-full max-w-full"
        particleBaseSize={100}
        particleCount={300}
      /> */}
      <div className="flex flex-row items-center h-full relative justify-center px-40 gap-30 mx-auto">
        <section className="h-1/2 flex flex-col justify-center flex-1 w-1/2">
          <h1
            className={`text-6xl uppercase tracking-widest text-white ${roboto_mono.className}`}
          >
            Isaac Malak
          </h1>
          <p className="text-2xl text-white/80 font-mono animate-fade-in">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
              Building apps, shipping code, and always learning.
            </span>
            <br />
            <span className="text-white/70 text-2xl">
              Focused on clean design, smooth user experiences and
              <span ref={coffeeRef} className="italic ">
                {" "}
                coffee.
              </span>
            </span>
            <br />
            <span className="italic text-cyan-200">
              Check out my projects below.
            </span>
          </p>
        </section>
        <section className="h-1/2 flex flex-col justify-center flex-1 w-1/2 items-end">
          <Image
            src="/images/profile3.png"
            alt=""
            width={400}
            height={400}
            className="rounded-full h-auto select-none"
          />
        </section>
      </div>
    </div>
  );
}
