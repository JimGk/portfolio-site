// src/sections/ProjectList.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

Modal.setAppElement('#root');

const projects = [
  { title: 'Sales Dashboard',    description: 'React & D3 dashboard …',       repo: 'https://github.com/you/sales-dashboard' },
  { title: 'Churn Model',        description: 'Flask & ML backend …',        repo: 'https://github.com/you/churn-model' },
  { title: 'Automation Toolkit', description: 'Python CLI toolkit …',         repo: 'https://github.com/you/toolkit' },
  { title: 'Data Warehouse ETL', description: 'Airflow DAGs & Snowflake …',   repo: 'https://github.com/you/etl' },
  { title: 'Interactive Map',    description: 'Leaflet + React map …',        repo: 'https://github.com/you/map' },
  { title: 'CLI Reporter',       description: 'Node.js CLI for reporting …',    repo: 'https://github.com/you/cli-report' }
];

export default function ProjectList() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section projects bg-slate-900 text-white">
      <h2 className="text-5xl font-heading mb-12 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col justify-between h-60 rounded-lg shadow-lg cursor-pointer bg-slate-800 hover:bg-slate-700 transition p-4"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="text-gray-400">Click to learn more</p>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={active !== null}
        onRequestClose={() => setActive(null)}
        className="max-w-lg mx-auto mt-24 bg-slate-800 p-6 rounded-lg outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center"
      >
        {active !== null && (
          <>
            <h3 className="text-3xl font-semibold text-white mb-4">
              {projects[active].title}
            </h3>
            <p className="text-gray-300 mb-6">
              {projects[active].description}
            </p>
            <a
              href={projects[active].repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-black rounded hover:bg-secondary transition"
            >
              View on GitHub
            </a>
          </>
        )}
      </Modal>
    </section>
  );
}