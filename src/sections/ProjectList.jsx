// src/sections/ProjectList.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

Modal.setAppElement('#root');

const projects = [
  {
    title: 'Customer Insights Notebook',
    description: 'Jupyter EDA project showcasing KPIs, trends, and visual analysis on customer data.',
    repo: 'https://github.com/yourusername/customer-insights-notebook'
  },
  {
    title: 'RCA Automation',
    description: 'Excel automation with Python to clean, transform, and visualize RCA data. Includes anonymized dataset.',
    repo: 'https://github.com/yourusername/ga-rca-automation'
  },
  {
    title: 'Excel Analysis Report',
    description: 'Standalone sample with pivots, formulas, and formatting exported as styled PDF.',
    repo: 'https://github.com/yourusername/excel-analysis-report'
  },
  {
    title: 'Business KPIs in Power BI',
    description: 'Interactive Power BI dashboard with filters, time-based metrics, and DAX-calculated KPIs.',
    repo: 'https://github.com/yourusername/power-bi-kpis'
  },
  {
    title: 'SQL Analytics with Python',
    description: 'Backend PostgreSQL with Python queries using SQLAlchemy and Pandas to extract and analyze data.',
    repo: 'https://github.com/yourusername/sql-python-analysis'
  },
  {
    title: 'Enterprise ETL Pipeline',
    description: 'Snowflake + Airflow ETL pipeline using Python and SQL to orchestrate daily data ingestion and transformation.',
    repo: 'https://github.com/yourusername/etl-pipeline'
  }
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