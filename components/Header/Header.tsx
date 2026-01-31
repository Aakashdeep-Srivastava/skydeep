// components/Header/Header.tsx
import React, { useRef, useState, useEffect, RefObject } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";
import { useAppContext } from "../AppContextFolder/AppContext";
import { ThemeToggle } from "@/components/theme";

interface HeaderProps {
  finishedLoading: boolean;
  sectionsRef: RefObject<HTMLDivElement | null>;
}

const Header = ({ finishedLoading, sectionsRef }: HeaderProps) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const { sharedState } = useAppContext();
  const scrollSizeY = useRef<number>(0);

  // Define the EventListener for the NavBar
  useEffect(() => {
    try {
      if (sharedState?.portfolio?.NavBar?.IntervalEvent === null) {
        sharedState.portfolio.NavBar.IntervalEvent = setInterval(() => {
          if (scrollSizeY.current === 0) {
            scrollSizeY.current = window.scrollY;
          } else if (window.scrollY > 50) {
            if (window.scrollY > scrollSizeY.current) {
              RefNavBar.current?.classList.remove("translate-y-0");
              RefNavBar.current?.classList.add("-translate-y-full");
            } else {
              RefNavBar.current?.classList.add("translate-y-0");
              RefNavBar.current?.classList.remove("-translate-y-full");
            }
            scrollSizeY.current = window.scrollY;
          }
        }, 100);
      }
    } catch (error) {
      console.log("Error setting up NavBar event:", error);
    }
  }, [sharedState]);

  // Adding the EventListener for the NavBar
  useEffect(() => {
    try {
      if (sharedState?.portfolio?.NavBar?.scrolling === null) {
        sharedState.portfolio.NavBar.scrolling = true;
        scrollSizeY.current = 0;
      }
    } catch (error) {
      console.log("Error setting up scroll event:", error);
    }
  }, [sharedState]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElement(true);
    }, 10400);
    return () => clearTimeout(timer);
  }, []);

  // Handle body overflow
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = rotate ? "hidden" : "auto";
    }
  }, [rotate]);

  return (
    <>
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />
      <motion.header
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: finishedLoading ? 0 : 9.4, duration: 0 } }}
        className={`w-full fixed top-0 left-0 right-0 z-50
                   ${ShowElement ? 'bg-AAprimary/90 backdrop-blur-md shadow-lg header-depth' : 'bg-transparent'}
                   transition-all duration-500 translate-y-0`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Logo finishedLoading={finishedLoading} />

            {/* Navigation */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Mobile Menu Icon */}
              <IconMenu
                rotate={rotate}
                setRotate={setRotate}
                setShowElement={setShowElement}
                ShowElement={ShowElement}
                finishedLoading={finishedLoading}
              />

              {/* Desktop Menu */}
              <DesktopMenu finishedLoading={finishedLoading} />

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: finishedLoading ? 0 : 10.3, duration: 0.3 }}
                className="flex items-center"
              >
                <ThemeToggle className="p-2 rounded-lg hover:bg-AAsecondary/10 transition-colors" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
