import { RefObject } from "react";
import { Martian_Mono, VT323 } from "next/font/google";
import Image from "next/image";

export const roboto_mono = Martian_Mono({
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
    <div ref={boxRef} className="relative h-screen w-full">
      <div className="flex h-full flex-col items-center justify-center text-center md:flex-row md:gap-10 md:px-10 md:pt-10 md:text-start">
        <section
          className={`flex flex-col justify-center bg-red-500/0 py-10 md:h-1/2 md:w-full md:flex-1/2 md:justify-center md:pt-0 ${roboto_mono.className} px-2`}
        >
          <h1
            className={`text-2xl font-bold tracking-widest text-white uppercase md:text-6xl`}
          >
            Isaac Malak
          </h1>
          <p className="font-mono text-white/80">
            <span
              className={`bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-xs font-bold text-transparent md:text-3xl `}
            >
              Building apps, shipping code, and always learning.
            </span>
            <br />
            <span
              className={`text-xs tracking-wider text-white/70 md:text-2xl `}
            >
              Focused on clean design, smooth user experiences and
              <span ref={coffeeRef} className="italic">
                {" "}
                coffee.
              </span>
            </span>
            <br />
            <span className="text-sm font-bold text-cyan-200 italic md:text-2xl">
              Check out my projects below.
            </span>
          </p>
        </section>
        <section className="flex w-full flex-col items-center justify-center bg-blue-700/0 px-10 md:h-1/2 md:flex-1 md:px-0 md:pt-0">
          <Image
            src="/images/profile3.png"
            alt=""
            width={400}
            height={400}
            className="rounded-full select-none md:h-auto"
          />
        </section>
      </div>
    </div>
  );
}
