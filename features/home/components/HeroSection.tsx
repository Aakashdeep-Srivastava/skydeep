import React from "react";
import { motion } from "framer-motion";

export default function MyName(props: { finishedLoading: boolean }) {
  return (
    <div
      className="min-h-[90vh] flex flex-col justify-center
      px-6 sm:px-8 md:px-16 lg:px-32 xl:px-56 2xl:px-72 py-20 sm:py-32"
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
  );
}
