import Link from "next/link";
import React from "react";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import GithubIcon from "@/components/Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "@/components/Icons/ExternalLink";
import LazyVideo from "@/components/LazyVideo";

export default function SomethingIveBuilt() {
  return (
    <section
      id="SomethingIveBuiltSection"
      className="w-full bg-AAprimary py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div data-aos="fade-up" className="flex items-center gap-2 mb-8 sm:mb-12">
          <ArrowIcon className="flex-none h-5 w-5 text-AAsecondary" />
          <span className="text-AAsecondary font-mono text-lg sm:text-xl">03.</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-primary whitespace-nowrap">
            Things I&apos;ve Built
          </h2>
          <div className="flex-grow h-[1px] bg-theme-muted ml-4 hidden sm:block"></div>
        </div>

      <div className="flex flex-col space-y-12 sm:space-y-16 md:space-y-24">

        {/* Project 1 - LFA Studio */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://lfastudio.life" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary
                  transition-opacity opacity-50 group-hover/card:opacity-0 cursor-pointer duration-300"></div>
              </a>
              <LazyVideo src="/lfaStudio.webm" poster="/posters/lfaStudio.webp" className="w-full rounded h-full object-cover" />
            </div>
          </div>

          {/* Mobile thumbnail */}
          <div className="md:hidden rounded-t-lg overflow-hidden aspect-video">
            <LazyVideo src="/lfaStudio.webm" poster="/posters/lfaStudio.webp" className="w-full h-full object-cover" />
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/lfaStudio.webm" poster="/posters/lfaStudio.webp" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Collaborative Design Studio for Development Sector</span>
                <a href="https://lfastudio.life" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    LFA Studio - Where Ideas Become Impact
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left text-sm md:text-base">
                  A collaborative <span className="text-AAsecondary">design studio for development sector leaders</span>.
                  Features <span className="text-AAsecondary">real-time multiplayer collaboration</span> with sub-100ms WebSockets,
                  live cursors and block locking. <span className="text-AAsecondary">AI-powered LFA suggestions</span> using
                  Gemini 3 &amp; GPT-4o Mini, powered by the NIPUN Bharat framework.
                  3-tier pricing with only 11 customers needed to break even.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">Next.js 14</span>
                <span className="pr-4 z-10">FastAPI</span>
                <span className="pr-4 z-10">React Flow</span>
                <span className="pr-4 z-10">Gemini AI</span>
                <span className="pr-4 z-10">Redis</span>
                <span className="pr-4 z-10">Neon</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/Aakashdeep-Srivastava/LFA-STUDIO" />
                <a href="https://lfastudio.life" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 - Autism Support Centre AI */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://autisticsupportcenter.vercel.app" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary
                  transition-opacity opacity-30 group-hover/card:opacity-0 cursor-pointer duration-300"></div>
              </a>
              <LazyVideo src="/autistic.webm" poster="/posters/autistic.webp" className="w-full rounded h-full object-cover" />
            </div>
          </div>

          {/* Mobile thumbnail */}
          <div className="md:hidden rounded-t-lg overflow-hidden aspect-video">
            <LazyVideo src="/autistic.webm" poster="/posters/autistic.webp" className="w-full h-full object-cover" />
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/autistic.webm" poster="/posters/autistic.webp" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Zero-Cost Government Infrastructure</span>
                <a href="https://autisticsupportcenter.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Autism Support Centre - AI Management System
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left md:text-right text-sm md:text-base">
                  State-wide <span className="text-AAsecondary">multi-centre digital platform</span> for autism &amp; neurodiversity
                  support in government schools. Features <span className="text-AAsecondary">Digital Intake</span> with ability profiling,
                  <span className="text-AAsecondary"> IEP goal tracking</span>, session scheduling with conflict detection,
                  <span className="text-AAsecondary"> SOAP clinical notes</span>, and a secure EMR document vault.
                  Built on zero-cost infrastructure with role-based access control.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">FastAPI</span>
                <span className="pr-4 z-10">Neon PostgreSQL</span>
                <span className="pr-4 z-10">Firebase</span>
                <span className="pr-4 z-10">shadcn/ui</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <a href="https://autisticsupportcenter.vercel.app" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 - Police Resource Management */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://github.com/Aakashdeep-Srivastava/PRM_Karnataka" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary
                  transition-opacity opacity-50 group-hover/card:opacity-0 cursor-pointer duration-300"></div>
              </a>
              <LazyVideo src="/karnataka-police.webm" poster="/posters/karnataka-police.webp" className="w-full rounded h-full object-cover" />
            </div>
          </div>

          {/* Mobile thumbnail */}
          <div className="md:hidden rounded-t-lg overflow-hidden aspect-video">
            <LazyVideo src="/karnataka-police.webm" poster="/posters/karnataka-police.webp" className="w-full h-full object-cover" />
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/karnataka-police.webm" poster="/posters/karnataka-police.webp" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">First Runner-up of Hack2skill Karnataka State Police Datathon 24</span>
                <a href="https://github.com/Aakashdeep-Srivastava/PRM_Karnataka" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Police Resource Management
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left text-sm md:text-base">
                  Built a <span className="text-AAsecondary">PowerBI dashboard</span> for police supervision,
                  optimizing resource management and crime tracking. Automated data updates with
                  <span className="text-AAsecondary"> Airtable</span>, reducing manual entry by 80% and enabling
                  5-minute decision cycles. <span className="text-AAsecondary">Ranked 2nd</span> out of 900 teams.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">PowerBI</span>
                <span className="pr-4 z-10">Analytics</span>
                <span className="pr-4 z-10">Airtable</span>
                <span className="pr-4 z-10">Dashboard</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/Aakashdeep-Srivastava/PRM_Karnataka" />
                <a href="https://prm-demo.streamlit.app" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 - SWAM+ Agentic Asset Management */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="#" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary
                  transition-opacity opacity-30 group-hover/card:opacity-0 cursor-pointer duration-300"></div>
              </a>
              <LazyVideo src="/SWAM.webm" poster="/posters/SWAM.webp" className="w-full rounded h-full object-cover" />
            </div>
          </div>

          {/* Mobile thumbnail */}
          <div className="md:hidden rounded-t-lg overflow-hidden aspect-video">
            <LazyVideo src="/SWAM.webm" poster="/posters/SWAM.webp" className="w-full h-full object-cover" />
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/SWAM.webm" poster="/posters/SWAM.webp" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Agentic AI for Municipal Operations</span>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    SWAM+ - Smart Waste &amp; Asset Management
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left md:text-right text-sm md:text-base">
                  Transforms static data directories into a <span className="text-AAsecondary">smart, context-aware workspace</span> for
                  municipal operations. Powered by <span className="text-AAsecondary">Gemini MCP multi-agent system</span> with 6
                  specialized agents — Operations, Finance, Plant, Asset Health, Workforce &amp; Policy.
                  Features <span className="text-AAsecondary">real-time collaborative chat</span> with AI Co-Manager bot,
                  auto-delegation, and financial calculator for panchayat-level budgeting.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Gemini AI</span>
                <span className="pr-4 z-10">MCP Agents</span>
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">FastAPI</span>
                <span className="pr-4 z-10">WebSockets</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
              </div>
            </div>
          </div>
        </div>

        {/* Project 5 - EduMate */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://github.com/Aakashdeep-Srivastava/edumate1.1" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary
                  transition-opacity opacity-50 group-hover/card:opacity-0 cursor-pointer duration-300"></div>
              </a>
              <LazyVideo src="/edumate.webm" poster="/posters/edumate.webp" className="w-full rounded h-full object-cover" />
            </div>
          </div>

          {/* Mobile thumbnail */}
          <div className="md:hidden rounded-t-lg overflow-hidden aspect-video">
            <LazyVideo src="/edumate.webm" poster="/posters/edumate.webp" className="w-full h-full object-cover" />
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/edumate.webm" poster="/posters/edumate.webp" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Edumate</span>
                <a href="https://edumate-demo.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Inclusive Learning Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left text-sm md:text-base">
                  Architected a <span className="text-AAsecondary">3D learning environment</span> with avatars and
                  <span className="text-AAsecondary"> real-time sign language recognition</span> (95% accuracy). Built
                  <span className="text-AAsecondary"> speech-to-image generation</span>, and canvas-based sketching,
                  enabling dynamic voice-to-drawing features with PocketBase backend.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">React3Fiber</span>
                <span className="pr-4 z-10">Nextjs14</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">WebRTC</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/Aakashdeep-Srivastava/edumate1.1" />
                <a href="https://edumate-demo.vercel.app" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 6 - ReachifyMe */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://drive.google.com/file/d/1Sfnlhc80Fi1jH4P0I6wBTrbXdB41NpC8/view" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary
                  transition-opacity opacity-30 group-hover/card:opacity-0 cursor-pointer duration-300"></div>
              </a>
              <LazyVideo src="/reachifyme.webm" poster="/posters/reachifyme.webp" className="w-full rounded h-full object-cover" />
            </div>
          </div>

          {/* Mobile thumbnail */}
          <div className="md:hidden rounded-t-lg overflow-hidden aspect-video">
            <LazyVideo src="/reachifyme.webm" poster="/posters/reachifyme.webp" className="w-full h-full object-cover" />
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/reachifyme.webm" poster="/posters/reachifyme.webp" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Winner of Product Space GenAI Hackathon</span>
                <a href="https://drive.google.com/file/d/1Sfnlhc80Fi1jH4P0I6wBTrbXdB41NpC8/view" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                   ReachifyMe Go-To-Market Strategy
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left md:text-right text-sm md:text-base">
                Led US market expansion strategy for ReachifyMe, creating
                  <span className="text-AAsecondary"> multi-channel acquisition plan</span> targeting 100+ paid users
                  at $14/month with <span className="text-AAsecondary">65% margins</span>. Reduced customer acquisition
                  costs from <span className="text-AAsecondary">$200 to $50</span> through strategic mix of Reddit,
                  podcasts and referral programs.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Feedough</span>
                <span className="pr-4 z-10">Extension</span>
                <span className="pr-4 z-10">Market Research</span>
                <span className="pr-4 z-10">Benchmarking</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <a href="https://drive.google.com/file/d/1Sfnlhc80Fi1jH4P0I6wBTrbXdB41NpC8/view" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 7 - Trading LLM Chatbot */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://harsh903-trading-llm-chatbot-app-fhmeah.streamlit.app/" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary
                  transition-opacity opacity-50 group-hover/card:opacity-0 cursor-pointer duration-300"></div>
              </a>
              <LazyVideo src="/dashboard.webm" poster="/posters/dashboard.webp" className="w-full rounded h-full object-cover" />
            </div>
          </div>

          {/* Mobile thumbnail */}
          <div className="md:hidden rounded-t-lg overflow-hidden aspect-video">
            <LazyVideo src="/dashboard.webm" poster="/posters/dashboard.webp" className="w-full h-full object-cover" />
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/dashboard.webm" poster="/posters/dashboard.webp" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Trading Analysis Copilot</span>
                <a href="https://harsh903-trading-llm-chatbot-app-fhmeah.streamlit.app/" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Underdevelopmenent for strategy building
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left text-sm md:text-base">
                  Advanced trading platform with <span className="text-AAsecondary">AI-powered insights</span>. Features
                  include real-time market analysis, <span className="text-AAsecondary">technical indicators</span>, risk
                  assessment, and trading recommendations using <span className="text-AAsecondary">Meta-Llama-3.1-70B</span>.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">SambaNova Inference APIs</span>
                <span className="pr-4 z-10">LLAMA405B</span>
                <span className="pr-4 z-10">Agents</span>
                <span className="pr-4 z-10">Nextjs</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://devpost.com/software/financial-risk-copilot" />
                <a href="https://harsh903-trading-llm-chatbot-app-fhmeah.streamlit.app/" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 8 - MetroMind */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7 flex items-center justify-center bg-AAprimary overflow-hidden">
              <a href="https://github.com/Aakashdeep-Srivastava/metromind" target="_blank" rel="noreferrer"
                className="relative h-full aspect-[9/16] mx-auto">
                <div className="absolute w-full h-full rounded-xl bg-AAprimary
                  transition-opacity opacity-30 group-hover/card:opacity-0 cursor-pointer duration-300 z-10"></div>
                <LazyVideo src="/metromind.webm" poster="/posters/metromind.webp" className="h-full rounded-xl object-contain" />
              </a>
            </div>
          </div>

          {/* Mobile thumbnail - phone mockup */}
          <div className="md:hidden flex justify-center py-4 bg-AAprimary rounded-t-lg">
            <div className="h-48 aspect-[9/16] rounded-xl overflow-hidden border border-AAsecondary/30 shadow-lg">
              <LazyVideo src="/metromind.webm" poster="/posters/metromind.webp" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0 overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/metromind.webm" poster="/posters/metromind.webp" className="h-full aspect-[9/16] rounded-xl object-contain" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">AI-Powered City Intelligence</span>
                <a href="https://github.com/Aakashdeep-Srivastava/metromind" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    MetroMind - Smart City PWA
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left md:text-right text-sm md:text-base">
                  Built a <span className="text-AAsecondary">Progressive Web App</span> delivering real-time city intelligence
                  for Bengaluru. Features <span className="text-AAsecondary">multi-agent AI system</span> with Google Gemini,
                  interactive maps with <span className="text-AAsecondary">heat visualization</span>, and real-time dashboards
                  tracking traffic, AQI, and community reports.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Next.js 15</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Gemini AI</span>
                <span className="pr-4 z-10">Leaflet</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/Aakashdeep-Srivastava/metromind" />
              </div>
            </div>
          </div>
        </div>

        {/* Project 9 - ThalassCare AI */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7 flex items-center justify-center bg-AAprimary overflow-hidden">
              <a href="https://dist-roan-three.vercel.app" target="_blank" rel="noreferrer"
                className="relative h-full aspect-[9/16] mx-auto">
                <div className="absolute w-full h-full rounded-xl bg-AAprimary
                  transition-opacity opacity-30 group-hover/card:opacity-0 cursor-pointer duration-300 z-10"></div>
                <LazyVideo src="/thalasscare.webm" poster="/posters/thalasscare.webp" className="h-full rounded-xl object-contain" />
              </a>
            </div>
          </div>

          {/* Mobile thumbnail - phone mockup */}
          <div className="md:hidden flex justify-center py-4 bg-AAprimary rounded-t-lg">
            <div className="h-48 aspect-[9/16] rounded-xl overflow-hidden border border-AAsecondary/30 shadow-lg">
              <LazyVideo src="/thalasscare.webm" poster="/posters/thalasscare.webp" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0 md:order-2 overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/thalasscare.webm" poster="/posters/thalasscare.webp" className="h-full aspect-[9/16] rounded-xl object-contain" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Healthcare AI Solution</span>
                <a href="https://dist-roan-three.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    ThalassCare AI - Patient Care
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left text-sm md:text-base">
                  Mobile health app for <span className="text-AAsecondary">thalassemia patients</span> with
                  <span className="text-AAsecondary"> AI-driven health scores</span>, transfusion scheduling,
                  iron overload alerts, and <span className="text-AAsecondary">e-RaktKosh integration</span> for
                  real-time blood availability from 3,800+ centers. Serving 270M+ carriers worldwide.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">React Native</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Expo</span>
                <span className="pr-4 z-10">LangGraph AI</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <a href="https://dist-roan-three.vercel.app" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 10 - Udyamika */}
        <div data-aos="fade-up" className="group/card relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://swavalamban-path-five.vercel.app" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary
                  transition-opacity opacity-30 group-hover/card:opacity-0 cursor-pointer duration-300"></div>
              </a>
              <LazyVideo src="/udYAMIKA.webm" poster="/posters/udYAMIKA.webp" className="w-full rounded h-full object-cover" />
            </div>
          </div>

          {/* Mobile thumbnail */}
          <div className="md:hidden rounded-t-lg overflow-hidden aspect-video">
            <LazyVideo src="/udYAMIKA.webm" poster="/posters/udYAMIKA.webp" className="w-full h-full object-cover" />
          </div>

          <div className="md:absolute md:py-4 md:grid md:grid-cols-12 w-full h-full content-center
            rounded-b-lg md:rounded-none project-card md:!bg-none md:!border-0 md:!shadow-none">
            <div className="hidden md:block absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <LazyVideo src="/udYAMIKA.webm" poster="/posters/udYAMIKA.webp" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Team Shakti | IIT Madras</span>
                <a href="https://swavalamban-path-five.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-theme-primary text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Udyamika - Women-Led Economic Transformation
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md md:p-6 z-10 md:project-description">
                <p className="text-theme-secondary text-left md:text-right text-sm md:text-base">
                  A revolutionary digital platform uplifting <span className="text-AAsecondary">rural &amp; urban women entrepreneurs</span>.
                  Features <span className="text-AAsecondary">Niti Sankalan</span> with AI eligibility checker for government schemes,
                  <span className="text-AAsecondary"> Gyaanvardhan</span> with gamified learning in regional languages,
                  <span className="text-AAsecondary"> Margdarshan</span> for MBA &amp; CSR mentor connect, and
                  <span className="text-AAsecondary"> Vitta Path</span> with AI-powered collateral-free credit assessment.
                  Scalable across 13.96 lakh Anganwadi centres and 661 Navodaya Vidyalayas.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-theme-secondary text-xs md:text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">AI/ML</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <a href="https://swavalamban-path-five.vercel.app" target="_blank" rel="noreferrer">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
