import React from "react";
import { motion } from "framer-motion";

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <motion.a
      href="/"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
      }}
      className="group relative flex items-center gap-3 cursor-pointer"
    >
      {/* Hexagon Logo */}
      <div className="relative h-12 w-12 flex items-center justify-center">
        {/* Hexagon border */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
        >
          <polygon
            points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-AAsecondary transition-all duration-300 group-hover:text-AAsecondary/80"
          />
        </svg>
        {/* Letter A */}
        <span className="relative text-xl font-bold text-AAsecondary font-mono
                        group-hover:scale-110 transition-transform duration-300">
          A
        </span>
      </div>

      {/* Brand Name - shown on larger screens */}
      <div className="hidden lg:flex flex-col">
        <span className="text-theme-primary text-lg font-semibold tracking-tight leading-tight">
          Aakashdeep
        </span>
        <span className="text-AAsecondary text-xs font-mono tracking-wider">
          AI Engineer
        </span>
      </div>
    </motion.a>
  );
}
