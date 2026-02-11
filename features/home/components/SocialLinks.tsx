import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import YoutubeIcon from "@/components/Icons/YoutubeIcon";

interface IconClickableProps {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const IconClickableWithAnimation = (props: IconClickableProps) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon className={"w-6 h-6 text-theme-secondary hover:text-AAsecondary fill-current hover:cursor-pointer"} />
      </a>
    </motion.div>
  );
};
export default function SocialMediaEmail(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: props.finishedLoading ? 0 : 11, duration: props.finishedLoading ? 0 : 0.5 } }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Watch Reel button */}
            <motion.button
              whileHover={{ y: -3, transition: { duration: 0.1 } }}
              onClick={() => window.dispatchEvent(new CustomEvent("open-reel"))}
              className="w-6 h-6 flex items-center justify-center text-theme-secondary
                         hover:text-AAsecondary hover:cursor-pointer transition-colors duration-200"
              aria-label="Watch Reel"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
            {/* Github Icon */}
            <IconClickableWithAnimation Icon={GithubIcon} href={"https://github.com/Aakashdeep-Srivastava"} />
            {/* Linkedin icon */}
            <IconClickableWithAnimation Icon={LinkedinIcon} href={"https://www.linkedin.com/in/aakashdeep0551"} />
            {/* Instagram Icon */}
            { <IconClickableWithAnimation Icon={InstagramIcon} href={"https://www.instagram.com/aakash.deep.1/"} /> }
            {/* Youtube Icon */}
            <IconClickableWithAnimation Icon={YoutubeIcon} href={"https://www.youtube.com/@aakashvani4046"} />
          </div>
          <div className="h-28 w-0.5 bg-theme-secondary"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar               */}
      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{ y: { delay: props.finishedLoading ? 0 : 11, duration: props.finishedLoading ? 0 : 0.5 } }}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a href="mailto:aakashdeep0551@gmail.com" target={"_blank"} rel="noreferrer">
              <span className=" font-Header tracking-wider text-theme-secondary hover:text-AAsecondary hover:cursor-pointer">
                aakashdeep0551<span className="text-AAsecondary">@</span>gmail<span className="text-AAsecondary">.</span>com
              </span>
            </a>
          </motion.div>

          <div className="h-24 w-0.5 bg-theme-secondary"></div>
        </div>
      </motion.div>
    </>
  );
}
