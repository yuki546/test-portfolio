"use client";

import { NAV_ITEMS } from "@/lib/utils";
import { DiamondPlus, Menu } from "lucide-react";
import Link from "next/link";
import { useMobileNav } from "./providers/MobileNavContext";

export default function Header() {
  const { openMobileNav } = useMobileNav();

  return (
    <header
      id="navContainer"
      className="bg-brand-base-100 sticky top-0 z-1 py-4 max-md:drop-shadow-md sm:static sm:py-5"
    >
      <nav className="mx-auto flex items-center justify-between gap-6 px-5 sm:max-w-5xl sm:px-6 md:justify-start lg:px-0">
        <Link href="/" className="flex items-center gap-4">
          <DiamondPlus className="h-8 w-8" />
          <h1>My Portfolio</h1>
        </Link>
        {/* Add navigation links here if needed in the future */}
        <div className="hidden gap-6 px-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:bg-brand-base-100 text-brand-secondary flex items-center rounded-md p-2 font-light transition-all duration-200 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="block md:hidden">
          <button
            id="mobileMenuBtn"
            className="text-brand-secondary rounded-md p-1"
            onClick={openMobileNav}
            aria-label="Navigation"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </nav>
    </header>
  );
}
