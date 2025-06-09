// src/sections/Skills.jsx
import React from 'react';
import {
  FaPython,
  FaDatabase,
  FaSnowflake,
  FaFileExcel,
  FaChartBar,
  FaRobot,
  FaCog,
  FaGithub,
  FaCodeBranch,
  FaTerminal
} from 'react-icons/fa';
import { SiJupyter, SiApacheairflow } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { icon: <FaPython size={40} />,    label: 'Python'       },
    { icon: <FaDatabase size={40} />,  label: 'PostgreSQL' },
    { icon: <FaSnowflake size={40} />, label: 'Snowflake' },
    { icon: <SiApacheairflow size={40} />, label: 'Airflow'       },
    { icon: <FaFileExcel size={40} />, label: 'Excel'    },
    { icon: <FaFileExcel size={40} />, label: 'VBA / Macros' },
    { icon: <FaChartBar size={40} />,  label: 'Power BI' },
    { icon: <FaRobot size={40} />,     label: 'ChatGPT / AI' },
    { icon: <FaGithub size={40} />,    label: 'Git / GitHub' },
    { icon: <SiJupyter size={40} />,   label: 'Jupyter'      },
    { icon: <FaCodeBranch size={40} />,label: 'APIs & ETL'   },
    { icon: <FaTerminal size={40} />,  label: 'Bash / Shell' }
  ];

  return (
    <section
      id="skills"
      className="section skills flex flex-col items-center justify-center text-center bg-slate-800 text-slate-200"
    >
      <h2 className="text-5xl font-heading mb-12">Tech Stack</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 max-w-4xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show:   { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            {s.icon}
            <span className="mt-3 text-lg">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}