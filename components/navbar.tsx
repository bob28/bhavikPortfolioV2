"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HoveredLink, Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const currentPath = usePathname();
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink
          href="/"
          className={
            currentPath === "/"
              ? "!text-green-400 font-bold hover:!text-green-500"
              : "hover:!text-green-400"
          }
        >
          Home
        </HoveredLink>
        <HoveredLink
          href="/resume"
          className={
            currentPath === "/resume"
              ? "!text-blue-400 font-bold hover:!text-blue-500"
              : "hover:!text-blue-400"
          }
        >
          Resume
        </HoveredLink>
        <HoveredLink
          href="/photography"
          className={
            currentPath === "/photography"
              ? "!text-red-400 font-bold hover:!text-red-500"
              : "hover:!text-red-400"
          }
        >
          Photography
        </HoveredLink>
        <HoveredLink
          href="https://bhaviksblogs.wordpress.com/"
          target="_blank"
          className="hover:!text-yellow-500"
        >
          Blog
        </HoveredLink>
      </Menu>
    </div>
  );
}
