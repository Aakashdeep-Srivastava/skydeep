import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Dispatch, SetStateAction } from "react";

interface MobileMenuProps {
  rotate: boolean;
  setRotate: Dispatch<SetStateAction<boolean>>;
  setShowElement: Dispatch<SetStateAction<boolean>>;
  ShowElement: boolean;
}

interface MobileNavItemProps {
  to: string;
  number: string;
  label: string;
  offset: number;
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
    className="group flex flex-col items-center gap-2 py-4 px-8 rounded-xl
               hover:bg-AAsecondary/10 transition-all duration-300 cursor-pointer"
  >
    <span className="text-AAsecondary text-sm font-mono font-medium">{number}</span>
    <span className="text-theme-primary text-xl font-medium tracking-wide
                     group-hover:text-AAsecondary transition-colors duration-300">
      {label}
    </span>
  </Link>
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

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-6"
          >
            <button
              className="text-AAsecondary text-lg font-medium px-10 py-4
                         rounded-xl border-2 border-AAsecondary
                         hover:bg-AAsecondary/10 hover:shadow-lg hover:shadow-AAsecondary/20
                         active:scale-95 transition-all duration-300"
            >
              Resume
            </button>
          </a>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
