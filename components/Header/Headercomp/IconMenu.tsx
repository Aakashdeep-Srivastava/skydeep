import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface IconMenuProps {
  rotate: boolean;
  setRotate: Dispatch<SetStateAction<boolean>>;
  setShowElement: Dispatch<SetStateAction<boolean>>;
  ShowElement: boolean;
  finishedLoading: boolean;
}

const IconMenu = (props: IconMenuProps) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: props.finishedLoading ? 0 : 9.4, duration: 0.3 }}
      onClick={() => {
        props.setRotate(!props.rotate);
        props.setShowElement(!props.ShowElement);
      }}
      className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center
                 rounded-lg hover:bg-AAsecondary/10 transition-colors duration-300
                 focus:outline-none"
      aria-label="Toggle menu"
    >
      {/* Top line */}
      <motion.span
        animate={props.rotate
          ? { rotate: 45, y: 0 }
          : { rotate: 0, y: -6 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute w-6 h-0.5 rounded-full bg-AAsecondary"
      />

      {/* Middle line */}
      <motion.span
        animate={props.rotate
          ? { opacity: 0, scaleX: 0 }
          : { opacity: 1, scaleX: 1 }
        }
        transition={{ duration: 0.2 }}
        className="absolute w-6 h-0.5 rounded-full bg-AAsecondary"
      />

      {/* Bottom line */}
      <motion.span
        animate={props.rotate
          ? { rotate: -45, y: 0 }
          : { rotate: 0, y: 6 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute w-6 h-0.5 rounded-full bg-AAsecondary"
      />
    </motion.button>
  );
};

export default IconMenu;
