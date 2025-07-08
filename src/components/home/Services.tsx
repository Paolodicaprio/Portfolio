"use client";

import { services } from '@/lib/data';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaFileAlt, FaComments } from 'react-icons/fa';

const iconComponents = {
  CodeBracketIcon: FaCode,
  ServerIcon: FaServer,
  DevicePhoneMobileIcon: FaMobileAlt,
  DocumentTextIcon: FaFileAlt,
  ChatBubbleBottomCenterTextIcon: FaComments
};

export default function Services() {
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
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800">
            Mes Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Solutions sur mesure pour vos besoins numériques
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents] || FaCode;
            
            return (
              <motion.div
                key={index}
                variants={item}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-l-4 border-transparent group-hover:border-blue-600">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      En savoir plus →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}