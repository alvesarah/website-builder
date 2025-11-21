import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

import { Bungee } from "next/font/google";
import { cn } from "@/lib/utils";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <Link href="/homepage" className={cn("flex gap-2 items-center", `${bungee.className} text-3xl`)}>
    <Image className="size-8" src={logo} alt="logo" />
      <span>WB</span>
    </Link>
  );
}
