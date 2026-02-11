import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "@/stores/useThemeStore";

export default function MyName(props: { finishedLoading: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useThemeStore();
  const isLight = theme === "light";

  const openVideo = useCallback(() => {
    setIsVideoOpen(true);
  }, []);

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  }, []);

  // Listen for open-reel event from SocialLinks
  useEffect(() => {
    const handleOpenReel = () => openVideo();
    window.addEventListener("open-reel", handleOpenReel);
    return () => window.removeEventListener("open-reel", handleOpenReel);
  }, [openVideo]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    if (isVideoOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen, closeVideo]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[90vh] flex flex-col justify-center
      px-6 sm:px-8 md:px-16 lg:px-32 xl:px-56 2xl:px-72 py-20 sm:py-32 overflow-hidden"
    >
      {/* Background Video — sketch-to-clear reveal on hover */}
      <video
        src="/Meshinig.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          opacity: isHovered ? (isLight ? 0.55 : 0.7) : (isLight ? 0.06 : 0.1),
          filter: isHovered
            ? "grayscale(0) contrast(1) brightness(1) blur(0px)"
            : isLight
              ? "grayscale(1) contrast(1.8) brightness(1.2) blur(1.5px)"
              : "grayscale(1) contrast(1.6) brightness(0.6) blur(1px)",
          transition: "opacity 1s cubic-bezier(0.4, 0, 0.2, 1), filter 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Gradient Overlay — fades out on hover to reveal video */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: isLight
            ? "linear-gradient(160deg, rgba(248,250,252,0.97) 0%, rgba(240,253,249,0.92) 30%, rgba(236,253,245,0.88) 50%, rgba(240,253,249,0.92) 70%, rgba(248,250,252,0.97) 100%)"
            : "var(--hero-overlay)",
          opacity: isHovered ? (isLight ? 0.35 : 0.25) : (isLight ? 0.95 : 0.9),
          transition: "opacity 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Vignette edges — keeps text area readable even when video is revealed */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(ellipse at center, transparent 30%, rgba(248,250,252,0.85) 100%)"
            : "radial-gradient(ellipse at center, transparent 30%, rgba(11,25,47,0.8) 100%)",
          opacity: isHovered ? 1 : 0.5,
          transition: "opacity 0.8s ease",
        }}
      />

      {/* Mobile: play button at bottom-right */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: props.finishedLoading ? 0.3 : 11.2, duration: 0.4 }}
        onClick={openVideo}
        className="absolute bottom-6 right-6 z-10 flex lg:hidden items-center gap-2
                   bg-AAsecondary/10 hover:bg-AAsecondary/20 border border-AAsecondary/30
                   rounded-full px-4 py-2 text-AAsecondary font-mono text-xs
                   backdrop-blur-sm transition-all duration-300
                   cursor-pointer group"
        aria-label="Play background video with sound"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        <span>Watch Reel</span>
      </motion.button>

      {/* Content Layer */}
      <div
        className="relative z-10 flex flex-col justify-center transition-all duration-700"
        style={{
          textShadow: isHovered
            ? isLight
              ? "0 1px 8px rgba(248,250,252,0.9), 0 0 30px rgba(248,250,252,0.6)"
              : "0 1px 8px rgba(11,25,47,0.9), 0 0 30px rgba(11,25,47,0.6)"
            : "none",
        }}
      >
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: 0.3 },
            y: { delay: props.finishedLoading ? 0 : 10.4, duration: 0.3 },
          }}
          className="text-AAsecondary font-mono text-sm sm:text-base"
        >
          Hi, my name is
        </motion.span>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: 0.3 },
            y: { delay: props.finishedLoading ? 0 : 10.5, duration: 0.3 },
          }}
          className="text-theme-primary font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 sm:mt-4
                     leading-tight"
        >
          Aakashdeep Srivastava.
        </motion.h1>

        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: 0.3 },
            y: { delay: props.finishedLoading ? 0 : 10.6, duration: 0.3 },
          }}
          className="text-theme-secondary font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4
                     leading-tight"
        >
          I turn ideas into reality.
        </motion.h2>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: 0.3 },
            y: { delay: props.finishedLoading ? 0 : 10.7, duration: 0.3 },
          }}
          className="text-theme-secondary font-Header text-base sm:text-lg mt-6 sm:mt-10
                     max-w-4xl leading-relaxed"
        >
          <span className="text-AAsecondary">AI Engineer</span> and{" "}
          <span className="text-AAsecondary">entrepreneur</span> with dual degrees from{" "}
          <span className="text-AAsecondary">IIT Madras</span> (Data Science) and GGV (Mechanical Engineering).
          Currently <span className="text-AAsecondary">Co-Founder & CTO</span> at Reclevo Infotech
          and <span className="text-AAsecondary">Founder & CEO</span> of Xphora AI Technology.
          Multiple hackathon winner specializing in{" "}
          <span className="text-AAsecondary">AI/ML solutions</span>,{" "}
          <span className="text-AAsecondary">blockchain integration</span>, and scalable backend architectures.
        </motion.p>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: 0.3 },
            y: { delay: props.finishedLoading ? 0 : 10.8, duration: 0.3 },
          }}
          className="mt-8 sm:mt-12 flex flex-wrap gap-4"
        >
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button className="group relative bg-transparent text-AAsecondary border-2 border-AAsecondary
                             rounded-lg px-6 sm:px-8 py-3 sm:py-4 font-mono text-sm sm:text-base
                             hover:bg-AAsecondary/10 active:scale-95
                             transition-all duration-300">
              View Resume
            </button>
          </a>
          <a href="mailto:aakashdeep0551@gmail.com">
            <button className="group relative bg-AAsecondary text-AAprimary
                             rounded-lg px-6 sm:px-8 py-3 sm:py-4 font-mono text-sm sm:text-base font-semibold
                             hover:bg-AAsecondary/90 active:scale-95
                             shadow-lg shadow-AAsecondary/25 hover:shadow-AAsecondary/40
                             transition-all duration-300">
              Get In Touch
            </button>
          </a>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={closeVideo}
          >
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 z-[60] text-white/80 hover:text-white
                         bg-white/10 hover:bg-white/20 rounded-full p-3
                         transition-all duration-200 hover:scale-110"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player — reel (9:16 portrait) size */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative h-[85vh] max-h-[900px] aspect-[9/16] rounded-2xl overflow-hidden
                         shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                src="/Meshinig.mp4"
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* ESC hint */}
            <span className="absolute bottom-6 text-white/40 text-xs font-mono">
              Press ESC or click outside to close
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
