// src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

export default function Hero() {
  const sparklinePoints = "0,80 50,60 100,90 150,40 200,70 250,30 300,60";
  const stats = [
  {
    end: 95,
    suffix: '%',
    label: 'Processing Time Cut',
    // 120 hrs → 6 hrs = 95% reduction in processing time
  },
  {
    end: 92,
    suffix: '%',
    label: 'Faster Report Generation'
    // 6 hrs → 0.5 hrs ≈ 92% faster report generation
  },
  {
    end: 100,
    suffix: '%',
    label: 'Workflow Automation'
    // All manual steps replaced by your scripts
  }
];

  return (
     <section id="hero" className="section hero bg-heroBg text-slate-200">
      <div className="prose-center mx-auto px-4 flex flex-col items-center justify-center h-full">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[5vw] lg:text-[3vw] font-heading mb-4 mx-auto"
        >
          Dimitrios Gkogkos
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl lg:text-3xl mb-12 max-w-2xl mx-auto"
        >
          Data Professional & Analytics Engineer — turning raw data into clear, actionable insights.
        </motion.p>

        {/* Sparkline */}
        <motion.svg
          width="100%"
          height="150"
          viewBox="0 0 300 100"
          className="overflow-visible mb-8 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.polyline
            points={sparklinePoints}
            fill="none"
            stroke="#22c55e"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.svg>

        {/* Divider */}
        <div className="w-24 h-1 bg-slate-700 mb-8 rounded-full mx-auto"></div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <InView key={i} triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className="bg-slate-800 bg-opacity-60 p-6 rounded-xl shadow-lg"
                >
                  <div className="h-16 flex items-center justify-center">
                    {inView ? (
                      <CountUp
                        end={stat.end}
                        suffix={stat.suffix}
                        duration={1.5}
                        className="text-3xl sm:text-4xl font-bold text-green-400 mx-auto"
                      />
                    ) : (
                      <span className="text-3xl sm:text-4xl font-bold text-green-400 mx-auto">
                        0{stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-lg text-center">{stat.label}</p>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}