import React from "react";
import { motion } from "framer-motion";

export function AnimatePage(
  Component,
  { initial, exit, animate, ...animateOptions } = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: { opacity: 1 },
  }
) {
  const AnimatedComponent = (props) => {
    return (
      <motion.div
        initial={initial}
        exit={exit}
        animate={animate}
        {...animateOptions}
        className="h-full"
      >
        <Component {...props} />
      </motion.div>
    );
  };

  return AnimatedComponent;
}
