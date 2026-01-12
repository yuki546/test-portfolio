import { X } from "lucide-react";
import Link from "next/link";
import { NAV_ITEMS, cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      className={cn(
        "bg-brand-base-200 border-brand-secondary/30 fixed -z-10 h-[65vh] w-full transform overflow-y-auto border-t px-6 py-4 opacity-0 transition-all duration-300 ease-in-out max-sm:bottom-0 max-sm:translate-y-16 max-sm:rounded-t-lg sm:top-0 sm:right-0 sm:h-screen sm:w-1/2 sm:translate-x-12 sm:border-l",
        isOpen && "z-30 opacity-100 max-sm:translate-y-0 sm:translate-x-0",
      )}
    >
      <button
        onClick={onClose}
        className="hover:bg-brand-base-100 text-brand-secondary absolute top-4 right-4 rounded-md p-1 transition-all duration-200 ease-in-out"
      >
        <X className="h-7 w-7" />
      </button>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 px-4 text-xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="hover:bg-brand-base-100 text-brand-secondary flex items-center rounded-md p-2 font-light transition-all duration-200 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
