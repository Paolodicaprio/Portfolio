"use client";

import { experiences } from '@/lib/data';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Mon Expérience Professionnelle
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mon parcours et les projets marquants
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline bar */}
          <div className="absolute left-4 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-400 dark:from-blue-600 dark:to-teal-500"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={item}
              transition={{ duration: 0.5 }}
              className="relative pl-16 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-600 dark:to-teal-500 flex items-center justify-center text-white">
                <FaBriefcase className="text-sm" />
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position} <span className="text-blue-600 dark:text-blue-400">@ {exp.company}</span>
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 rounded-full bg-blue-500"></span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}