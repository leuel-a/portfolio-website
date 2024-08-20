"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

// utils functions
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

import closeIcon from "../../../public/assets/shared/icon-close.svg";
import burgerIcon from "../../../public/assets/shared/icon-hamburger.svg";

export default function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex items-center justify-start gap-44 px-4 py-10 lg:justify-between">
      <div>
        <p className="font-precious select-none text-4xl font-bold italic">
          LA
        </p>
      </div>
      <button
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={expanded}
        className={cn(
          "absolute right-8 top-8 z-50 aspect-square w-8 bg-no-repeat text-white",
          !expanded &&
            isMobile &&
            "bg-[url('/assets/shared/icon-hamburger.svg')]",
          expanded && isMobile && "bg-[url('/assets/shared/icon-close.svg')]",
        )}
        onClick={() => setExpanded((prev) => !prev)}
      ></button>
      <nav
        id="primary-navigation"
        className="z-20 font-sans-cond lg:min-w-[45rem]"
      >
        <ul
          className={cn(
            "fixed left-1/3 right-0 top-0 flex h-full flex-col items-center gap-4 rounded-sm bg-white bg-opacity-5 px-2 py-40 text-left backdrop-blur-md lg:static lg:flex-row lg:py-0 lg:text-center",
            !expanded && isMobile && "translate-x-full",
          )}
        >
          <NavLink number="00" name="Home" href="#" />
          <NavLink number="01" name="Technologies" href="#" />
          <NavLink number="02" name="Projects" href="#" />
          <NavLink number="03" name="About" href="#" />
          <NavLink number="04" name="Contact" href="#" />
        </ul>
      </nav>
    </header>
  );
}
