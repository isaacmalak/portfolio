"use client";
import { GithubIcon, LucideLinkedin, MailIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ProfileNavBar() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    fetch("/api/myEmail", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.email);
      })
      .catch(console.error);
  }, []);
  return (
    <nav className="absolute z-100 flex w-full flex-row items-center justify-end bg-transparent px-5 py-3 text-white backdrop-blur-xs">
      <div className="flex gap-5">
        <Link href={"https://www.linkedin.com/in/isaacmalak/"} target="_blank">
          <LucideLinkedin />
        </Link>
        <Link href={"https://github.com/isaacmalak"} target="_blank">
          <GithubIcon />
        </Link>

        <Link
          href="#"
          onClick={async (e) => {
            e.preventDefault();
            if (email) window.open(`mailto:${email}`, "_blank");
          }}
          aria-label="Email"
          className="transition-colors hover:text-blue-400"
        >
          <MailIcon />
        </Link>
      </div>
    </nav>
  );
}
