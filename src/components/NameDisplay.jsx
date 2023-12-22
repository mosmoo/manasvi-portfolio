import React, { useState } from "react";
import { motion } from "framer-motion";

function NameDisplay() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const onAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div className="mt-10 pt-20" style={{ overflow: "hidden" }}>
      <motion.h1
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 10, repeatType: "reverse" }}
        className="text-center text-stone-600 text-6xl"
        style={{ fontFamily: "'Kalnia', serif" }}
        onAnimationComplete={onAnimationComplete}
      >
        MANASVI
      </motion.h1>
      <motion.h1
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 10, repeatType: "reverse" }}
        className="text-center text-stone-600 text-6xl"
        style={{ fontFamily: "'Kalnia', serif" }}
        onAnimationComplete={onAnimationComplete}
      >
        SALUJA
      </motion.h1>

      {animationComplete && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-stone-600 mt-8 font-mono"
        >
          I'm passionate about crafting beautiful and functional web experiences.
        </motion.p>
      )}
    </div>
  );
}

export default NameDisplay;
