// components/Header/Header.tsx
import React, { useRef, useState, useEffect, useContext } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";
import AppContext from "../AppContextFolder/AppContext";

const Header = (props: { finishedLoading: boolean, sectionsRef }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const context = useContext(AppContext);
  const scrollSizeY = useRef<number>(0);

  // Define the EventListener for the NavBar
  useEffect(() => {
    try {
      if (context?.sharedState?.portfolio?.NavBar?.IntervalEvent === null) {
        context.sharedState.portfolio.NavBar.IntervalEvent = () => {
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
        };
      }
    } catch (error) {
      console.log("Error setting up NavBar event:", error);
    }
  }, [context]);

  // Adding the EventListener for the NavBar
  useEffect(() => {
    try {
      if (context?.sharedState?.portfolio?.NavBar?.scrolling === null) {
        context.sharedState.portfolio.NavBar.scrolling = true;
        scrollSizeY.current = 0;

        if (typeof window !== "undefined" && 
            context.sharedState.portfolio.NavBar.IntervalEvent) {
          window.addEventListener(
            "scroll", 
            context.sharedState.portfolio.NavBar.IntervalEvent
          );

          // Cleanup function
          return () => {
            window.removeEventListener(
              "scroll", 
              context.sharedState.portfolio.NavBar.IntervalEvent
            );
          };
        }
      }
    } catch (error) {
      console.log("Error setting up scroll event:", error);
    }
  }, [context]);

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
      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: props.finishedLoading ? 0 : 9.4, duration: 0 } }}
        className={`w-full fixed ${ShowElement ? 'bg-opacity-70 shadow-xl' : 'bg-opacity-0'} 
                   bg-AAprimary flex justify-between px-6 sm:px-12 py-2 sm:py-4 
                   transition duration-4000 translate-y-0 z-20`}
      >
        <Logo finishedLoading={props.finishedLoading} />
        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={ShowElement}
          finishedLoading={props.finishedLoading}
        />
        <DesktopMenu finishedLoading={props.finishedLoading} />
      </motion.div>
    </>
  );
};

export default Header;