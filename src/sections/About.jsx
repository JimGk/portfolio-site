// src/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import resume from '../assets/resume.pdf';

export default function About() {
  return (
    <section
      id="about"
      className="section about flex items-center justify-center bg-slate-50 text-gray-900"
    >
      {/* constrain width, center, and add vertical spacing */}
      <div className="w-full max-w-3xl mx-auto text-center space-y-6 px-4 lg:px-0">
        <h2 className="text-4xl font-heading">About Me</h2>
        <p className="text-lg leading-relaxed">
          Curious by nature and driven by impact, I specialize in turning complex, messy data into clean, actionable insights. I design scalable solutions using Python, SQL, and VBA—automating manual processes, reducing hours of work to minutes, and delivering reports that people can trust. From building multi-market reporting engines to streamlining operations, I bring speed, structure, and precision to every project. Always learning, always optimizing.
        </p>
        <motion.a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My CV
        </motion.a>
      </div>
    </section>
  );
}