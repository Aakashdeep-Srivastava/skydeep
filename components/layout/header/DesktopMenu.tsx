import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

interface NavItemProps {
  to: string;
  number: string;
  label: string;
  delay: number;
  finishedLoading: boolean;
  offset?: number;
}

interface PageLinkProps {
  href: string;
  number: string;
  label: string;
  delay: number;
  finishedLoading: boolean;
}

const NavItem = ({ to, number, label, delay, finishedLoading, offset = -100 }: NavItemProps) => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 100,
      duration: finishedLoading ? 0 : 0.8,
      delay: finishedLoading ? 0 : delay,
    }}
  >
    <ReactScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={200}
      className="group flex items-center gap-1 cursor-pointer px-2 py-1
                 hover:bg-AAsecondary/10 transition-all duration-300"
    >
      <span className="text-AAsecondary font-mono text-xs font-bold">{number}</span>
      <span className="text-gray-800 dark:text-gray-200 text-sm font-medium
                       group-hover:text-AAsecondary transition-colors duration-300">
        {label}
      </span>
    </ReactScrollLink>
  </motion.div>
);

const PageLink = ({ href, number, label, delay, finishedLoading }: PageLinkProps) => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 100,
      duration: finishedLoading ? 0 : 0.8,
      delay: finishedLoading ? 0 : delay,
    }}
  >
    <Link
      href={href}
      className="group flex items-center gap-1 cursor-pointer px-2 py-1
                 hover:bg-AAsecondary/10 transition-all duration-300"
    >
      <span className="text-AAsecondary font-mono text-xs font-bold">{number}</span>
      <span className="text-gray-800 dark:text-gray-200 text-sm font-medium
                       group-hover:text-AAsecondary transition-colors duration-300">
        {label}
      </span>
    </Link>
  </motion.div>
);

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  const navItems = [
    { to: "aboutSection", number: "01.", label: "About", delay: 9.4, offset: -100 },
    { to: "WhereIhaveWorkedSection", number: "02.", label: "Experience", delay: 9.6, offset: -300 },
    { to: "SomethingIveBuiltSection", number: "03.", label: "Projects", delay: 9.8, offset: -100 },
    { to: "GetInTouchSection", number: "04.", label: "Contact", delay: 10.0, offset: -100 },
  ];

  const pageLinks = [
    { href: "/thoughts", number: "05.", label: "Thoughts", delay: 10.05 },
  ];

  return (
    <nav className="md:flex hidden flex-row items-center gap-2">
      {navItems.map((item) => (
        <NavItem
          key={item.to}
          to={item.to}
          number={item.number}
          label={item.label}
          delay={item.delay}
          offset={item.offset}
          finishedLoading={props.finishedLoading}
        />
      ))}

      {pageLinks.map((link) => (
        <PageLink
          key={link.href}
          href={link.href}
          number={link.number}
          label={link.label}
          delay={link.delay}
          finishedLoading={props.finishedLoading}
        />
      ))}

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: props.finishedLoading ? 0 : 0.8,
          delay: props.finishedLoading ? 0 : 10.2,
        }}
        className="ml-4"
      >
        <Link href="/support">
          <button
            className="relative text-AAsecondary text-xs font-mono font-semibold px-4 py-2
                       rounded border-2 border-AAsecondary
                       hover:bg-AAsecondary hover:text-white dark:hover:text-AAprimary
                       hover:shadow-lg hover:shadow-AAsecondary/30
                       active:scale-95 transition-all duration-300"
          >
            Support
          </button>
        </Link>
      </motion.div>
    </nav>
  );
}
