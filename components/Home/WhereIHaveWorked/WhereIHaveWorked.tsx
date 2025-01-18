import React from "react";
import { motion } from "framer-motion";

export default function WhereIHaveWorked() {
  const [descriptionJob, setDescriptionJob] = React.useState("EduGorilla");
  
  const GetDescription = () => {
    switch (descriptionJob) {
      case "EduGorilla":
        return <EduGorillaDesc />;
      case "Krsta":
        return <KrstaDesc />;
      case "HURL":
        return <HURLDesc />;
      case "Indian Railways":
        return <RailwaysDesc />;
      default:
        return <EduGorillaDesc />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      <section className="flex flex-row items-center">
        <span className="text-AAsecondary font-sans text-sm sm:text-xl">02.</span>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      
      <section className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center md:items-start">
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = ({ setDescriptionJob }) => {
  const [barPosition, setBarPosition] = React.useState(-8);
  const [barAbovePosition, setBarAbovePosition] = React.useState(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState([
    true, false, false, false
  ]);

  const CompanyButton = ({ 
    buttonIndex,
    companyName,
    barPosition,
    barAbovePosition,
    descriptionJob,
    newColorState
  }) => (
    <button
      onClick={() => {
        setBarPosition(barPosition);
        setBarAbovePosition(barAbovePosition);
        setDescriptionJob(descriptionJob);
        setCompanyNameBackgroundColorGreen(newColorState);
      }}
      className={`flex-none sm:text-sm text-xs text-center md:text-left hover:text-AAsecondary
        hover:bg-ResumeButtonHover rounded font-mono py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
        ${companyNameBackgroundColorGreen[buttonIndex] ? "bg-ResumeButtonHover text-AAsecondary" : "text-gray-500"}`}
    >
      {companyName}
    </button>
  );

  return (
    <div className="flex flex-col md:flex-row w-screen lg:w-auto overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start sm:justify-center items-start sm:items-center">
      <div className="hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[352px] translate-y-1 md:w-0.5 rounded md:order-1 order-2">
        <motion.div
          animate={{ y: barPosition }}
          className="absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary"
        />
      </div>
      
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            buttonIndex={0}
            companyName="EduGorilla"
            barPosition={-10}
            barAbovePosition={1}
            descriptionJob="EduGorilla"
            newColorState={[true, false, false, false]}
          />
          <CompanyButton
            buttonIndex={1}
            companyName="Krsta"
            barPosition={40}
            barAbovePosition={129}
            descriptionJob="Krsta"
            newColorState={[false, true, false, false]}
          />
          <CompanyButton
            buttonIndex={2}
            companyName="HURL"
            barPosition={83}
            barAbovePosition={257}
            descriptionJob="HURL"
            newColorState={[false, false, true, false]}
          />
          <CompanyButton
            buttonIndex={3}
            companyName="Indian Railways"
            barPosition={126}
            barAbovePosition={385}
            descriptionJob="Indian Railways"
            newColorState={[false, false, false, true]}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div 
            animate={{ x: barAbovePosition }} 
            className="w-[128px] h-0.5 rounded bg-AAsecondary" 
          />
        </div>
      </div>
    </div>
  );
};

const EduGorillaDesc = () => (
  <div className="flex-col space-y-5 max-w-xl px-4 md:px-0">
    <div className="flex flex-col space-y-2">
      <span className="text-gray-100 text-xl font-bold">AI Engineer</span>
      <span className="text-AAsecondary">Aug 2024 - Present</span>
    </div>
    <div className="flex flex-col space-y-4 text-gray-400">
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Fine-tuned <span className="text-AAsecondary">Qwen-3B (2.5B parameters)</span> using <span className="text-AAsecondary">Amazon SageMaker</span> for K-8 educational content, implementing <span className="text-AAsecondary">Parameter Efficient Fine-Tuning (PEFT)</span> over 3-6 epochs for optimized resource utilization.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Leveraged <span className="text-AAsecondary">MLflow LLM Evaluate</span> for model performance tracking, integrating with <span className="text-AAsecondary">DAGsHub</span> for collaborative experiment management and reproducibility.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Developed automated text-to-video pipeline using <span className="text-AAsecondary">Gemini Pro</span>, <span className="text-AAsecondary">Unsplash API</span>, <span className="text-AAsecondary">ElevenLabs</span> for voice cloning, and <span className="text-AAsecondary">Rhubarb Lip Sync</span> with Celebrity Avatar.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Implemented <span className="text-AAsecondary">SmartScraper AI</span> for government exam notifications, enhancing user engagement with timely updates.</span>
      </div>
    </div>
  </div>
);

const KrstaDesc = () => (
  <div className="flex-col space-y-5 max-w-xl px-4 md:px-0">
    <div className="flex flex-col space-y-2">
      <span className="text-gray-100 text-xl font-bold">Webflow Developer</span>
      <span className="text-AAsecondary">Oct 2023 - Jun 2023</span>
    </div>
    <div className="flex flex-col space-y-4 text-gray-400">
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Revamped website using <span className="text-AAsecondary">Figma</span> and <span className="text-AAsecondary">Webflow</span>, optimizing admin dashboard with <span className="text-AAsecondary">Airtable automations</span>, achieving a <span className="text-AAsecondary">15-30%</span> improvement in user experience.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Boosted process efficiency by <span className="text-AAsecondary">15-25%</span> through <span className="text-AAsecondary">Zaps</span> and <span className="text-AAsecondary">Stripe</span> integration, managing backend requests for <span className="text-AAsecondary">80+ users</span>.</span>
      </div>
    </div>
  </div>
);

const HURLDesc = () => (
  <div className="flex-col space-y-5 max-w-xl px-4 md:px-0">
    <div className="flex flex-col space-y-2">
      <span className="text-gray-100 text-xl font-bold">Summer Engineering Intern</span>
      <span className="text-AAsecondary">Jun 2022 - Aug 2022</span>
    </div>
    <div className="flex flex-col space-y-4 text-gray-400">
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Analyzed <span className="text-AAsecondary">DM-Plant blueprint</span> to identify <span className="text-AAsecondary">3 critical issues</span> within the N-Pit area.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Evaluated <span className="text-AAsecondary">maintenance shutdown data</span> to identify discrepancies and anomalies in N-Pit operations.</span>
      </div>
    </div>
  </div>
);

const RailwaysDesc = () => (
  <div className="flex-col space-y-5 max-w-xl px-4 md:px-0">
    <div className="flex flex-col space-y-2">
      <span className="text-gray-100 text-xl font-bold">Summer Engineering Intern</span>
      <span className="text-AAsecondary">Jun 2021 - Jul 2021</span>
    </div>
    <div className="flex flex-col space-y-4 text-gray-400">
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Analyzed <span className="text-AAsecondary">air brake systems</span> in LHB railway coaches, examining <span className="text-AAsecondary">20+ components</span> for high-speed operations up to <span className="text-AAsecondary">160 km/h</span>.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Documented <span className="text-AAsecondary">technical specifications</span> and maintenance procedures at <span className="text-AAsecondary">Northern Eastern Railway</span>.</span>
      </div>
    </div>
  </div>
);