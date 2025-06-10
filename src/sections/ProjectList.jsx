// src/sections/ProjectList.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

Modal.setAppElement('#root');

const projects = [
  {
    title: 'Streamlit-Powered QA Dashboard',
    description: 'An interactive web app that sits on top of processed data and lets stakeholders explore key QA metrics.',
    repo: 'https://rcadashboardpy-ctd4l5xx9yeiyfmor2oqx3.streamlit.app/'
  },
  {
    title: 'Airlines Data-Processing CLI Tool',
    description: 'A standalone Python script with a console-based workflow.. Includes anonymized dataset.',
    repo: 'https://github.com/JimGk/airlines_qa_dashboard/blob/main/rca_breakdown.py'
  },
  {
    title: 'Customer Insights',
    description: 'Jupyter EDA project showcasing KPIs, trends, and visual analysis on customer data.',
    repo: 'https://github.com/JimGk/dc_product_sales/blob/main/notebooks/dc_product_sales_eda.ipynb'
  },
  {
    title: 'Advanced SQL queries',
    description: 'The queries showcase real-world skills in data aggregation, temporal analysis, anomaly detection, and reporting—all written in clean, efficient PostgreSQL.',
    repo: 'https://github.com/JimGk/SQL-migration/blob/main/validation/advanced_sql_queries.sql'
  },
  {
    title: 'Penguins Linear Regression',
    description: 'This learning project focuses on deepening understanding of statistical modeling by applying OLS linear regression using the statsmodels library on the Palmer Penguins dataset.',
    repo: 'https://github.com/JimGk/penguins-linear-regression-model/blob/main/penguins.ipynb'
  },
  {
    title: 'Excel Analysis Sample',
    description: 'Standalone samples with pivots, formulas, and formatting exported as PDF with randomized and anonymized data.',
    repo: 'https://github.com/JimGk/Sample_Spreadsheets/blob/main/Spreadsheets%20-%20Demo.pdf'
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