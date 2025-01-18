import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">03.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I've Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* Project 1 - EduMate */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://github.com/Aakashdeep-Srivastava/edumate1.1" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img 
              src={"/edumate 2.png"} 
              alt={"EduMate Project"} 
              className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img 
                src={"/edumate 2.png"}
                alt={"EduMate Project"} 
                className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Edumate</span>
                <a href="https://edumate-demo.vercel.app" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Inclusive Learning Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Architected a <span className="text-AAsecondary">3D learning environment</span> with avatars and 
                  <span className="text-AAsecondary"> real-time sign language recognition</span> (95% accuracy). Built 
                  <span className="text-AAsecondary"> speech-to-image generation</span>, and canvas-based sketching, 
                  enabling dynamic voice-to-drawing features with PocketBase backend.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">React3Fiber</span>
                <span className="pr-4 z-10">Nextjs14</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">WebRTC</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/Aakashdeep-Srivastava/edumate1.1" />
                <a href="https://edumate-demo.vercel.app" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
  {/* Project 2 - ReachifyMe */}
        {/* Project 4 - Trading LLM Chatbot */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://drive.google.com/file/d/1Sfnlhc80Fi1jH4P0I6wBTrbXdB41NpC8/view" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/ReachifyMe Go-To-Market Strategy.gif"} alt={"Trading Bot Project"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/ReachifyMe Go-To-Market Strategy.gif"} alt={"Trading Bot Project"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Winner of Product Space GenAI Hackathon</span>
                <a href="https://drive.google.com/file/d/1Sfnlhc80Fi1jH4P0I6wBTrbXdB41NpC8/view" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                   ReachifyMe Go-To-Market Strategy
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                Led US market expansion strategy for ReachifyMe, creating 
                  <span className="text-AAsecondary"> multi-channel acquisition plan</span> targeting 100+ paid users 
                  at $14/month with <span className="text-AAsecondary">65% margins</span>. Reduced customer acquisition 
                  costs from <span className="text-AAsecondary">$200 to $50</span> through strategic mix of Reddit, 
                  podcasts and referral programs.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Feedough</span>
                <span className="pr-4 z-10">Extension</span>
                <span className="pr-4 z-10">Market Research</span>
                <span className="pr-4 z-10">Benchmarking</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <a href="https://drive.google.com/file/d/1Sfnlhc80Fi1jH4P0I6wBTrbXdB41NpC8/view" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>



                {/* Project 3 - Police Resource Management */}
                <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://github.com/Aakashdeep-Srivastava/PRM_Karnataka" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/Karnataka Police.gif"} alt={"PRM Project"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/Karnataka Police.gif"} alt={"PRM Project"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">First Runner-up of Hack2skill Karnataka State Police Datathon 24</span>
                <a href="https://github.com/Aakashdeep-Srivastava/PRM_Karnataka" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Police Resource Management
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Built a <span className="text-AAsecondary">PowerBI dashboard</span> for police supervision, 
                  optimizing resource management and crime tracking. Automated data updates with 
                  <span className="text-AAsecondary"> Airtable</span>, reducing manual entry by 80% and enabling 
                  5-minute decision cycles. <span className="text-AAsecondary">Ranked 2nd</span> out of 900 teams.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">PowerBI</span>
                <span className="pr-4 z-10">Analytics</span>
                <span className="pr-4 z-10">Airtable</span>
                <span className="pr-4 z-10">Dashboard</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/Aakashdeep-Srivastava/PRM_Karnataka" />
                <a href="https://prm-demo.streamlit.app" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 - Trading LLM Chatbot */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://harsh903-trading-llm-chatbot-app-fhmeah.streamlit.app/" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/dashboard.gif"} alt={"Trading Bot Project"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/dashboard.gif"} alt={"Trading Bot Project"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Trading Analysis Copilot</span>
                <a href="https://harsh903-trading-llm-chatbot-app-fhmeah.streamlit.app/" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Underdevelopmenent for strategy building
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Advanced trading platform with <span className="text-AAsecondary">AI-powered insights</span>. Features 
                  include real-time market analysis, <span className="text-AAsecondary">technical indicators</span>, risk 
                  assessment, and trading recommendations using <span className="text-AAsecondary">Meta-Llama-3.1-70B</span>.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">SambaNova Inference APIs</span>
                <span className="pr-4 z-10">LLAMA405B</span>
                <span className="pr-4 z-10">Agents</span>
                <span className="pr-4 z-10">Nextjs</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://devpost.com/software/financial-risk-copilot" />
                <a href="https://harsh903-trading-llm-chatbot-app-fhmeah.streamlit.app/" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>




        {/* Project 5 - Sukoon */}
       
        

      </div>
    </div>
    );
  }