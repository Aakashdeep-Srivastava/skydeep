import React from "react";
import { motion } from "framer-motion";

interface CompaniesBarProps {
  setDescriptionJob: React.Dispatch<React.SetStateAction<string>>;
}

interface CompanyButtonProps {
  buttonIndex: number;
  companyName: string;
  barPosition: number;
  barAbovePosition: number;
  descriptionJob: string;
  newColorState: boolean[];
}

export default function WhereIHaveWorked() {
  const [descriptionJob, setDescriptionJob] = React.useState("Reclevo");

  const GetDescription = () => {
    switch (descriptionJob) {
      case "Reclevo":
        return <ReclevoDesc />;
      case "Xphora":
        return <XphoraDesc />;
      case "EduGorilla":
        return <EduGorillaDesc />;
      case "Krsta":
        return <KrstaDesc />;
      default:
        return <ReclevoDesc />;
    }
  };

  return (
    <section
      id="WhereIhaveWorkedSection"
      className="w-full bg-AAprimary py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 overflow-x-hidden">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8 sm:mb-12">
          <span className="text-AAsecondary font-mono text-lg sm:text-xl">02.</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-primary whitespace-nowrap">
            Where I&apos;ve Worked
          </h2>
          <div className="flex-grow h-[1px] bg-theme-muted ml-4 hidden sm:block"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <CompaniesBar setDescriptionJob={setDescriptionJob} />
          <motion.div
            key={descriptionJob}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 min-w-0"
          >
            {GetDescription()}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const CompaniesBar = ({ setDescriptionJob }: CompaniesBarProps) => {
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
  }: CompanyButtonProps) => (
    <button
      onClick={() => {
        setBarPosition(barPosition);
        setBarAbovePosition(barAbovePosition);
        setDescriptionJob(descriptionJob);
        setCompanyNameBackgroundColorGreen(newColorState);
      }}
      className={`flex-none text-sm text-center lg:text-left hover:text-AAsecondary
        hover:bg-ResumeButtonHover rounded-md font-mono py-3 px-4 lg:px-6 min-w-[100px] lg:w-44
        transition-all duration-300 active:scale-95
        ${companyNameBackgroundColorGreen[buttonIndex]
          ? "bg-ResumeButtonHover text-AAsecondary"
          : "text-theme-muted"
        }`}
    >
      {companyName}
    </button>
  );

  return (
    <div className="w-full lg:w-auto">
      {/* Mobile: Horizontal scrollable tabs */}
      <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex gap-2 pb-3 min-w-max">
          <CompanyButton
            buttonIndex={0}
            companyName="Reclevo"
            barPosition={-10}
            barAbovePosition={0}
            descriptionJob="Reclevo"
            newColorState={[true, false, false, false]}
          />
          <CompanyButton
            buttonIndex={1}
            companyName="Xphora AI"
            barPosition={40}
            barAbovePosition={108}
            descriptionJob="Xphora"
            newColorState={[false, true, false, false]}
          />
          <CompanyButton
            buttonIndex={2}
            companyName="EduGorilla"
            barPosition={90}
            barAbovePosition={216}
            descriptionJob="EduGorilla"
            newColorState={[false, false, true, false]}
          />
          <CompanyButton
            buttonIndex={3}
            companyName="Krsta"
            barPosition={140}
            barAbovePosition={324}
            descriptionJob="Krsta"
            newColorState={[false, false, false, true]}
          />
        </div>
        {/* Mobile indicator bar */}
        <div className="h-0.5 rounded bg-theme-muted/30 relative">
          <motion.div
            animate={{ x: barAbovePosition }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-[100px] h-0.5 rounded bg-AAsecondary absolute"
          />
        </div>
      </div>

      {/* Desktop: Vertical tabs with indicator */}
      <div className="hidden lg:flex">
        <div className="relative">
          {/* Vertical indicator line */}
          <div className="absolute left-0 top-0 w-0.5 h-full bg-theme-muted/30 rounded">
            <motion.div
              animate={{ y: barPosition + 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-0.5 h-12 rounded bg-AAsecondary"
            />
          </div>
          {/* Buttons */}
          <div className="flex flex-col ml-0.5">
            <CompanyButton
              buttonIndex={0}
              companyName="Reclevo"
              barPosition={0}
              barAbovePosition={0}
              descriptionJob="Reclevo"
              newColorState={[true, false, false, false]}
            />
            <CompanyButton
              buttonIndex={1}
              companyName="Xphora AI"
              barPosition={48}
              barAbovePosition={108}
              descriptionJob="Xphora"
              newColorState={[false, true, false, false]}
            />
            <CompanyButton
              buttonIndex={2}
              companyName="EduGorilla"
              barPosition={96}
              barAbovePosition={216}
              descriptionJob="EduGorilla"
              newColorState={[false, false, true, false]}
            />
            <CompanyButton
              buttonIndex={3}
              companyName="Krsta"
              barPosition={144}
              barAbovePosition={324}
              descriptionJob="Krsta"
              newColorState={[false, false, false, true]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const JobDescription = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <span className="text-AAsecondary mt-1 flex-shrink-0">▹</span>
    <span className="text-theme-secondary text-sm sm:text-base leading-relaxed">{children}</span>
  </div>
);

const ReclevoDesc = () => (
  <div className="space-y-4 sm:space-y-5">
    <div className="space-y-1">
      <h3 className="text-theme-primary text-lg sm:text-xl font-bold">Co-Founder & CTO</h3>
      <p className="text-AAsecondary text-sm sm:text-base">Reclevo Infotech Pvt. Ltd.</p>
      <p className="text-theme-muted text-xs sm:text-sm font-mono">June 2025 - Present</p>
    </div>
    <div className="space-y-3">
      <JobDescription>
        Lead <span className="text-AAsecondary">technology strategy</span> and product development for joint venture focused on AI-driven solutions.
      </JobDescription>
      <JobDescription>
        Architect <span className="text-AAsecondary">scalable systems</span> integrating AI, blockchain, and data analytics for enterprise clients.
      </JobDescription>
      <JobDescription>
        Drive technical decisions across <span className="text-AAsecondary">full-stack development</span>, infrastructure, and ML operations.
      </JobDescription>
    </div>
  </div>
);

const XphoraDesc = () => (
  <div className="space-y-4 sm:space-y-5">
    <div className="space-y-1">
      <h3 className="text-theme-primary text-lg sm:text-xl font-bold">Founder & CEO</h3>
      <p className="text-AAsecondary text-sm sm:text-base">Xphora AI Technology Pvt. Ltd.</p>
      <p className="text-theme-muted text-xs sm:text-sm font-mono">March 2025 - Present</p>
    </div>
    <div className="space-y-3">
      <JobDescription>
        Founded <span className="text-AAsecondary">sustainability-focused AI company</span> securing funding from GIM hackathon for carbon offset tracking platform.
      </JobDescription>
      <JobDescription>
        Developed <span className="text-AAsecondary">blockchain-integrated platform</span> using Celo smart contracts for transparent carbon credit transactions.
      </JobDescription>
      <JobDescription>
        Built TypeScript backend with <span className="text-AAsecondary">PostgreSQL</span> and Celo integration, reducing manual validation time by <span className="text-AAsecondary">40%</span>.
      </JobDescription>
    </div>
  </div>
);

const EduGorillaDesc = () => (
  <div className="space-y-4 sm:space-y-5">
    <div className="space-y-1">
      <h3 className="text-theme-primary text-lg sm:text-xl font-bold">AI Engineer</h3>
      <p className="text-AAsecondary text-sm sm:text-base">EduGorilla Community Pvt. Ltd.</p>
      <p className="text-theme-muted text-xs sm:text-sm font-mono">July 2024 - August 2025</p>
    </div>
    <div className="space-y-3">
      <JobDescription>
        Implemented <span className="text-AAsecondary">PEFT fine-tuning</span> for Qwen-3B using AWS SageMaker, reducing GPU memory usage by <span className="text-AAsecondary">60%</span>.
      </JobDescription>
      <JobDescription>
        Architected <span className="text-AAsecondary">microservices video generation pipeline</span> using Gemini Pro and ElevenLabs, processing 50+ concurrent requests.
      </JobDescription>
      <JobDescription>
        Automated exam notification system processing <span className="text-AAsecondary">1000+ government notifications</span> daily with 99% accuracy.
      </JobDescription>
    </div>
  </div>
);

const KrstaDesc = () => (
  <div className="space-y-4 sm:space-y-5">
    <div className="space-y-1">
      <h3 className="text-theme-primary text-lg sm:text-xl font-bold">Automation Engineer</h3>
      <p className="text-AAsecondary text-sm sm:text-base">Krsta Consultancy Services LLP</p>
      <p className="text-theme-muted text-xs sm:text-sm font-mono">October 2023 - May 2024</p>
    </div>
    <div className="space-y-3">
      <JobDescription>
        Developed <span className="text-AAsecondary">automation solutions</span> for enterprise clients improving operational efficiency.
      </JobDescription>
      <JobDescription>
        Revamped website using <span className="text-AAsecondary">Figma and Webflow</span>, optimizing admin dashboard with Airtable automations.
      </JobDescription>
      <JobDescription>
        Boosted process efficiency by <span className="text-AAsecondary">15-25%</span> through Zaps and Stripe integration, managing backend for 80+ users.
      </JobDescription>
    </div>
  </div>
);
