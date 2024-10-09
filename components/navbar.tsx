"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HoveredLink, Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const currentPath = usePathname();
  const coloredLink = "!text-blue-500 font-bold hover:!text-blue-400";
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink
          href="/"
          className={currentPath === "/" ? coloredLink : ""}
        >
          Home
        </HoveredLink>
        <HoveredLink
          href="/resume"
          className={currentPath === "/resume" ? coloredLink : ""}
        >
          Resume
        </HoveredLink>
        <HoveredLink
          href="/photography"
          className={currentPath === "/photography" ? coloredLink : ""}
        >
          Photography
        </HoveredLink>
        <HoveredLink
          href="https://bhaviksblogs.wordpress.com/"
          target="_blank"
          className={
            currentPath === "https://bhaviksblogs.wordpress.com/"
              ? coloredLink
              : ""
          }
        >
          Blog
        </HoveredLink>
      </Menu>
    </div>
  );
}
