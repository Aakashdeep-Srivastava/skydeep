import { motion } from "framer-motion";
import { Link } from "react-scroll";
import NextLink from "next/link";

interface MobileMenuProps {
  rotate: boolean;
  setRotate: React.Dispatch<React.SetStateAction<boolean>>;
  setShowElement: React.Dispatch<React.SetStateAction<boolean>>;
  ShowElement: boolean;
}

interface MobileNavItemProps {
  to: string;
  number: string;
  label: string;
  offset: number;
  onClick: () => void;
}

interface MobilePageLinkProps {
  href: string;
  number: string;
  label: string;
  onClick: () => void;
}

const MobileNavItem = ({ to, number, label, offset, onClick }: MobileNavItemProps) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={offset}
    duration={200}
    onClick={onClick}
    className="group flex flex-col items-center gap-1.5 py-4 px-8 rounded-xl
               hover:bg-AAsecondary/10 active:bg-AAsecondary/20 active:scale-95
               transition-all duration-200 cursor-pointer min-w-[120px]"
  >
    <span className="text-AAsecondary text-xs font-mono font-bold">{number}</span>
    <span className="text-gray-800 dark:text-gray-200 text-lg font-medium
                     group-hover:text-AAsecondary transition-colors duration-200">
      {label}
    </span>
  </Link>
);

const MobilePageLink = ({ href, number, label, onClick }: MobilePageLinkProps) => (
  <NextLink
    href={href}
    onClick={onClick}
    className="group flex flex-col items-center gap-1.5 py-4 px-8 rounded-xl
               hover:bg-AAsecondary/10 active:bg-AAsecondary/20 active:scale-95
               transition-all duration-200 cursor-pointer min-w-[120px]"
  >
    <span className="text-AAsecondary text-xs font-mono font-bold">{number}</span>
    <span className="text-gray-800 dark:text-gray-200 text-lg font-medium
                     group-hover:text-AAsecondary transition-colors duration-200">
      {label}
    </span>
  </NextLink>
);

const MobileMenu = (props: MobileMenuProps) => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };

  const navItems = [
    { to: "aboutSection", number: "01.", label: "About", offset: -50 },
    { to: "WhereIhaveWorkedSection", number: "02.", label: "Experience", offset: -250 },
    { to: "SomethingIveBuiltSection", number: "03.", label: "Projects", offset: 100 },
    { to: "GetInTouchSection", number: "04.", label: "Contact", offset: 100 },
  ];

  const pageLinks = [
    { href: "/thoughts", number: "05.", label: "Thoughts" },
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={props.rotate ? { x: "0" } : { x: "100%" }}
      transition={{ x: { duration: 0.4, ease: "easeInOut" } }}
      className="w-full fixed h-screen flex md:hidden z-40"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={props.rotate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={closeMenu}
        className="w-1/4 sm:w-1/3 h-full backdrop-blur-sm bg-AAprimary/30 cursor-pointer"
      />

      {/* Menu Panel */}
      <div className="w-3/4 sm:w-2/3 h-full bg-MobileNavBarColor/95 backdrop-blur-lg
                      flex flex-col justify-center items-center
                      border-l border-AAsecondary/20 shadow-2xl">
        <nav className="flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.to}
              to={item.to}
              number={item.number}
              label={item.label}
              offset={item.offset}
              onClick={closeMenu}
            />
          ))}

          {pageLinks.map((link) => (
            <MobilePageLink
              key={link.href}
              href={link.href}
              number={link.number}
              label={link.label}
              onClick={closeMenu}
            />
          ))}

          {/* Support Button */}
          <NextLink
            href="/support"
            onClick={closeMenu}
            className="mt-6"
          >
            <button
              className="text-AAsecondary text-base font-mono font-semibold px-8 py-3
                         rounded-lg border-2 border-AAsecondary
                         hover:bg-AAsecondary hover:text-white dark:hover:text-AAprimary
                         hover:shadow-lg hover:shadow-AAsecondary/30
                         active:scale-95 active:bg-AAsecondary/90
                         transition-all duration-200"
            >
              Support
            </button>
          </NextLink>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
