import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-0.75 z-9999 pointer-events-none">
      <motion.div
        className="h-full bg-linear-to-r from-primary-blue via-amber-400 to-primary-orange origin-left shadow-[0_0_12px_rgba(241,130,35,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgressBar;
