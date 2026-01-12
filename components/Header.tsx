import { DiamondPlus } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-brand-base-100 sticky top-0 z-1 py-4 max-md:drop-shadow-md sm:static sm:py-5">
      <div className="container mx-auto flex items-center gap-6 px-5 sm:max-w-5xl sm:px-6 lg:px-0">
        <Link href="/" className="flex items-center gap-4">
          <DiamondPlus className="h-8 w-8" />
          <h1>My Portfolio</h1>
        </Link>
        {/* Add navigation links here if needed in the future */}
        <nav>
          <div className="hidden gap-6 px-8 md:flex">
            <Link
              href="/"
              className="hover:bg-brand-base-100 text-brand-secondary flex items-center rounded-md p-2 font-light transition-all duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:bg-brand-base-100 text-brand-secondary flex items-center rounded-md p-2 font-light transition-all duration-200 ease-in-out"
            >
              About
            </Link>
            <Link
              href="/works"
              className="hover:bg-brand-base-100 text-brand-secondary flex items-center rounded-md p-2 font-light transition-all duration-200 ease-in-out"
            >
              Works
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
