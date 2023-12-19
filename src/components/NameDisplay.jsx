import React from "react";
import { motion } from "framer-motion";

function NameDisplay() {
  return (
    <div className="pt-6" style={{ overflow: "hidden" }}>
      <motion.h1
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 10, repeatType: "reverse" }}
        className="text-center text-stone-600 text-6xl" /* Added shadow-md class */
        style={{ fontFamily: "'Kalnia', serif" }}
      >
        MANASVI
      </motion.h1>
      <motion.h1
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 10, repeatType: "reverse" }}
        className="text-center text-stone-600 text-6xl" /* Added shadow-md class */
        style={{ fontFamily: "'Kalnia', serif", textShadow: "50"}}
      >
        SALUJA
      </motion.h1>
    </div>
  );
}

export default NameDisplay;
