import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center justify-center mt-10 pb-16">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", fontFamily: "'Kalnia', serif" }}
        className="text-3xl text-slate-600 p-3"
      >
        Connect with me!
      </motion.h1>
      <div className="flex flex-col items-center space-y-2 mt-2 text-center">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-600 hover:text-indigo-500 font-mono"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-600 hover:text-indigo-500"
        >
          LINKEDIN
        </a>
        <p className="text-stone-600 font-mono">manasvisaluja2003@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
