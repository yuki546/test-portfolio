"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import MobileNav from "../mobileNav"; // Adjust path if necessary
import BlurBackDropComponent from "../BlurBackDrop"; // Adjust path if necessary

interface MobileNavContextType {
  isMobileNavOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
}

const MobileNavContext = createContext<MobileNavContextType | undefined>(
  undefined,
);

export const useMobileNav = () => {
  const context = useContext(MobileNavContext);
  if (!context) {
    throw new Error("useMobileNav must be used within a MobileNavProvider");
  }
  return context;
};

export const MobileNavProvider = ({ children }: { children: ReactNode }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <MobileNavContext.Provider
      value={{ isMobileNavOpen, openMobileNav, closeMobileNav }}
    >
      {children}
      <MobileNav isOpen={isMobileNavOpen} onClose={closeMobileNav} />
      <BlurBackDropComponent
        className={
          isMobileNavOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none"
        }
        onClick={closeMobileNav}
      />
    </MobileNavContext.Provider>
  );
};
