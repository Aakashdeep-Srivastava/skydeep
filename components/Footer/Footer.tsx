import React, { ComponentType } from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

interface ClickableIconProps {
  href: string;
  Icon: ComponentType<{ className?: string }>;
}

const ClickableIcon = ({ href, Icon }: ClickableIconProps) => {
  return (
    <a href={href} className="" target={"_blank"} rel="noreferrer">
      <Icon className={"w-5 h-5 text-theme-secondary hover:text-AAsecondary fill-current hover:cursor-pointer"} />
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
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>
    </div>
  );
}
