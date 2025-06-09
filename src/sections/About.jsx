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
          Former musician in entertainment and research. Driven by a lifelong curiosity, I blend creative problem-solving (rooted in my music degree) with razor-sharp logic to tame data chaos.
          From slashing a 120-hour Excel process to 6 hours with Python scripts, to building a 30-minute, multi-market reporting engine, I automate everything in sight.
          Whether it’s Python, SQL, or VBA, I design scalable tools that turn complexity into clarity, and I’m just getting started.
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