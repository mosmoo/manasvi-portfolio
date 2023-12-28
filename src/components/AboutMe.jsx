import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AboutMe() {
  const text =
    "As a trilingual software engineer with a passion to innovate, I'm deeply immersed in the realms of full-stack development, graphic design, and fabrication. Leveraging expertise in JavaScript, Python, React, Django, and Express.js, I've spearheaded projects like Munch Meet and Food Wars, blending technology and creativity seamlessly. From mentoring in robotics to designing engaging campaigns, I've honed leadership and communication skills, amplified by immersive education from General Assembly and Generation USA. Passionate about merging technology with creativity, I seek roles that foster innovation and collaborative growth, aiming to make a meaningful impact in every endeavor."

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;
      if (index === text.length - 1) clearInterval(interval); // Adjusted condition here
    }, 50);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="aboutme" className="flex flex-col items-center mt-8 ">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", fontFamily: "'Kalnia', serif" }}
        className="text-3xl text-slate-600 p-3"
      >
        About Me
      </motion.h1>
      <div className="flex flex-col mt-4 p-6 bg-white rounded-lg md:mx-20 sm:mx-2 shadow-lg">
        <AnimatePresence>
          <motion.p
            key="paragraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-stone-600 font-mono "
          >
            {displayText}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AboutMe;
