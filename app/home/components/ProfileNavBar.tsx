import {
  GithubIcon,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
} from "lucide-react";
import Link from "next/link";

export function ProfileNavBar() {
  return (
    <nav className="flex justify-between relative z-10 py-3 px-5 blur-3xl">
      <div className="text-xl font-bold">MyProfile</div>
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
