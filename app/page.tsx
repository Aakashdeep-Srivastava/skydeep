'use client';

import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { useEffect, useRef } from "react";
import { useAppContext } from "@/components/AppContextFolder/AppContext";

// Import from features - lazy loaded
const HeroSection = dynamic(
  () => import("@/features/home/components/HeroSection"),
  { loading: () => <div className="min-h-[50vh] bg-AAprimary" /> }
);
const SocialLinks = dynamic(
  () => import("@/features/home/components/SocialLinks"),
  { ssr: false }
);
const AboutSection = dynamic(
  () => import("@/features/home/components/AboutSection"),
  { loading: () => <div className="min-h-screen bg-AAprimary" /> }
);
const ExperienceSection = dynamic(
  () => import("@/features/home/components/ExperienceSection"),
  { loading: () => <div className="min-h-[50vh] bg-AAprimary" /> }
);
const ProjectsSection = dynamic(
  () => import("@/features/home/components/ProjectsSection"),
  { loading: () => <div className="min-h-[50vh] bg-AAprimary" /> }
);
const ContactSection = dynamic(
  () => import("@/features/home/components/ContactSection"),
  { loading: () => <div className="min-h-[30vh] bg-AAprimary" /> }
);
const Footer = dynamic(
  () => import("@/components/layout/footer/Footer"),
  { loading: () => <div className="h-20 bg-AAprimary" /> }
);

// Only load in dev
const ScreenSizeDetector = dynamic(
  () => import("@/components/CustomComponents/ScreenSizeDetector"),
  { ssr: false }
);

export default function Home() {
  const { sharedState, setSharedState } = useAppContext();
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up event listeners from other pages
    if (sharedState.userdata.timerCookieRef.current) {
      clearInterval(sharedState.userdata.timerCookieRef.current);
    }
    if (typeof window !== "undefined") {
      if (sharedState.userdata.windowSizeTracker.current) {
        window.removeEventListener("resize", sharedState.userdata.windowSizeTracker.current);
      }
      if (sharedState.userdata.mousePositionTracker.current) {
        window.removeEventListener("mousemove", sharedState.userdata.mousePositionTracker.current, false);
      }
      if (sharedState.typing.eventInputLostFocus) {
        window.removeEventListener("resize", sharedState.typing.eventInputLostFocus);
      }
      if (sharedState.typing.keyboardEvent) {
        document.removeEventListener("keydown", sharedState.typing.keyboardEvent);
      }
    }
    // Mark as loaded immediately
    if (!sharedState.finishedLoading) {
      setSharedState(prev => ({ ...prev, finishedLoading: true }));
    }
  }, [sharedState, setSharedState]);

  const isProd = process.env.NODE_ENV === "production";

  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full overflow-x-hidden">
      {/* Critical path - loads immediately */}
      <Header finishedLoading={true} sectionsRef={homeRef} />
      <HeroSection finishedLoading={true} />
      <SocialLinks finishedLoading={true} />

      {/* Below the fold - lazy loaded */}
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer
        githubUrl="https://github.com/Aakashdeep-Srivastava"
        hideSocialsInDesktop={true}
      />
      {!isProd && <ScreenSizeDetector />}
    </div>
  );
}
