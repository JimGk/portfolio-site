// src/App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar      from './components/Navbar';
import Hero        from './sections/Hero';
import About       from './sections/About';
import Skills      from './sections/Skills';
import ProjectList from './sections/ProjectList';
import Badges      from './sections/Badges';
import Footer      from './components/Footer';

const variants = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0 }
};

export default function App() {
  const sections = [
    { Component: Hero,        id: 'hero'     },
    { Component: About,       id: 'about'    },
    { Component: Skills,      id: 'skills'   },
    { Component: ProjectList, id: 'projects' },
    { Component: Badges,      id: 'badges'   }
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Navbar />

      {/* Main scrollable area */}
      <main
        className="flex-1 overflow-y-auto h-full
                   ml-0        /* no gap on mobile */
                   lg:ml-24"   /* 6rem gap on lg+ */
      >
        {sections.map(({ Component, id }, i) => (
          <motion.section
            key={id}
            id={id}
            className="section snap-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            variants={variants}
          >
            <Component />
          </motion.section>
        ))}

        <Footer />
      </main>
    </div>
  );
}