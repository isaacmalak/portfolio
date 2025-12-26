import { GithubIcon, LucideLinkedin } from "lucide-react";
import Link from "next/link";

export function ProfileNavBar() {
  return (
    <nav className="flex flex-row w-full justify-end py-3 px-5 text-white bg-transparent backdrop-blur-xs items-center absolute z-10">
      <div className="flex gap-5">
        <Link href={"https://www.linkedin.com/in/isaacmalak/"} target="_blank">
          <LucideLinkedin />
        </Link>
        <Link href={"https://github.com/isaacmalak"} target="_blank">
          <GithubIcon />
        </Link>
      </div>
    </nav>
  );
}
