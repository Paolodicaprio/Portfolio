"use client"
import { skills } from '@/lib/data';
import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading">Mes Compétences</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Un aperçu des technologies et des outils que j&apos;utilise quotidiennement pour créer des applications modernes et performantes.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === null
                ? 'bg-primary text-white'
                : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700'
            }`}
          >
            Tous
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md capitalize transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="card p-6 hover:shadow-lg transition-shadow"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium text-lg">{skill.name}</h3>
                <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 capitalize">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}