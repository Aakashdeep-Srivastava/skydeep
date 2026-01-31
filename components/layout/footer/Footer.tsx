import React from "react";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";

interface ClickableIconProps {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const ClickableIcon = (props: ClickableIconProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-lg transition-all duration-300
                 hover:bg-AAsecondary/10 active:scale-90"
    >
      <props.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-theme-secondary hover:text-AAsecondary fill-current" />
    </a>
  );
};

const IconsData = [
  { href: "https://github.com/Aakashdeep-Srivastava", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/aakashdeep0551", Icon: LinkedinIcon },
  { href: "https://www.instagram.com/aakash.deep.1/", Icon: InstagramIcon },
  { href: "https://www.youtube.com/@aakashvani4046", Icon: YoutubeIcon },
];

export default function Fotter(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  return (
    <footer className="bg-AAprimary flex flex-col justify-center items-center py-6 sm:py-8 space-y-4 px-4">
      {/* Social icons */}
      <div className={`flex flex-row gap-2 sm:gap-4 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>

      {/* Copyright */}
      <p className="text-theme-muted text-xs sm:text-sm font-mono text-center">
        Built with ❤️ by Aakashdeep
      </p>
    </footer>
  );
}
