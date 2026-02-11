import React from "react";
import Image from "next/image";

export default function AboutMe() {
  const technologies = [
    ["Python", "TypeScript/Node.js", "LLMs (Qwen, Gemini)"],
    ["AWS SageMaker", "PostgreSQL", "PEFT Fine-tuning"],
    ["Blockchain (Celo)", "PowerBI", "Docker"],
    ["Vector DB", "Realtime Database", "Microservices"],
    ["PL-100", "DP-100"],
  ];

  return (
    <section id="aboutSection" className="w-full bg-AAprimary py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8 sm:mb-12">
          <span className="text-AAsecondary font-mono text-lg sm:text-xl">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary">About Me</h2>
          <div className="flex-grow h-[1px] bg-theme-muted ml-4 hidden sm:block"></div>
        </div>

        {/* Content Container - Stack on mobile, side by side on desktop */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:w-3/5 space-y-5 text-theme-secondary">
            <p className="text-base sm:text-lg leading-relaxed">
              My journey started with a simple question:{" "}
              <span className="text-AAsecondary font-medium italic">&quot;What if machines could think?&quot;</span>{" "}
              That curiosity led me from dismantling gadgets as a kid to building{" "}
              <span className="text-AAsecondary font-medium">AI systems</span> that solve real-world problems.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              I believe the best solutions emerge at the{" "}
              <span className="text-AAsecondary font-medium">intersection of disciplines</span>.
              My mechanical engineering background taught me to think in systems, while data science
              gave me the tools to make those systems intelligent. This blend helps me see problems
              differently—and solve them creatively.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              What drives me? The thrill of the{" "}
              <span className="text-AAsecondary font-medium">0 → 1 journey</span>—taking an idea
              from a napkin sketch to a working product. Whether it&apos;s winning hackathons at
              3 AM or building solutions that impact thousands, I&apos;m happiest when I&apos;m
              creating something that{" "}
              <span className="text-AAsecondary font-medium">didn&apos;t exist before</span>.
            </p>

            <p className="text-base sm:text-lg pt-2">
              My current toolkit:
            </p>

            {/* Technologies Grid - 3 columns on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs sm:text-sm">
              {technologies.flat().map((tech, index) => (
                <div key={index} className="flex items-center gap-2 py-1">
                  <span className="text-AAsecondary">▹</span>
                  <span className="text-theme-secondary">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Container - Centered on mobile */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative group w-48 sm:w-64 md:w-72 lg:w-80 aspect-[3/4]">
              {/* Border Frame */}
              <div className="absolute inset-0 border-2 border-AAsecondary rounded-md
                            translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5
                            transition-transform duration-300 group-hover:translate-x-3
                            group-hover:translate-y-3"></div>

              {/* Image Wrapper */}
              <div className="relative rounded-md overflow-hidden w-full h-full">
                <Image
                  src="/images/sky.jpg"
                  alt="Aakashdeep Srivastava"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-300 group-hover:scale-105"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-AAsecondary/20 transition-opacity
                              duration-300 group-hover:opacity-0 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
