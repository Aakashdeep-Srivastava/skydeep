import React, { useEffect, useState } from "react";

export default function GetInTouch() {
  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent) && /wv/.test(userAgent)) {
      setIsAndroidWebView(true);
    }
  }, []);

  return (
    <section
      id="GetInTouchSection"
      className="w-full bg-AAprimary py-20 sm:py-32 px-6 sm:px-8"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Number */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-AAsecondary font-mono text-sm sm:text-base">04.</span>
          <span className="text-AAsecondary font-mono text-sm sm:text-base">What&apos;s Next?</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-6">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="text-theme-secondary text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 px-2">
          I&apos;m always open to new opportunities and interesting projects.
          Whether you have a question, want to collaborate, or just want to say hi—my inbox is always open!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {isAndroidWebView ? (
            <div className="px-6 py-4 border-2 border-AAsecondary rounded-lg
                          text-AAsecondary font-mono text-sm sm:text-base">
              aakashdeep0551@gmail.com
            </div>
          ) : (
            <>
              <a href="mailto:aakashdeep0551@gmail.com">
                <button className="w-full sm:w-auto bg-AAsecondary text-AAprimary font-mono font-semibold
                                 text-sm sm:text-base px-8 py-4 rounded-lg
                                 hover:bg-AAsecondary/90 active:scale-95
                                 shadow-lg shadow-AAsecondary/25 hover:shadow-AAsecondary/40
                                 transition-all duration-300">
                  Say Hello
                </button>
              </a>
              <a href="https://www.linkedin.com/in/aakashdeep0551/" target="_blank" rel="noreferrer">
                <button className="w-full sm:w-auto bg-transparent text-AAsecondary font-mono
                                 text-sm sm:text-base px-8 py-4 rounded-lg
                                 border-2 border-AAsecondary
                                 hover:bg-AAsecondary/10 active:scale-95
                                 transition-all duration-300">
                  LinkedIn
                </button>
              </a>
            </>
          )}
        </div>

        {/* Social Links for Mobile */}
        <div className="mt-12 flex justify-center gap-6 sm:hidden">
          <a
            href="https://github.com/Aakashdeep-Srivastava"
            target="_blank"
            rel="noreferrer"
            className="text-theme-secondary hover:text-AAsecondary transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aakashdeep0551/"
            target="_blank"
            rel="noreferrer"
            className="text-theme-secondary hover:text-AAsecondary transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
