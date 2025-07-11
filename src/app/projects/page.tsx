'use client';

import { projects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('Tous');
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'Tous') return true;
    return project.technologies.some(tech => 
      tech.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Fallback vers un gradient si l'image ne charge pas
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="heading">Mes Projets</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et significatifs.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['Tous', 'React', 'Vue', 'Flutter', 'Laravel', 'WordPress'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === filterOption
                  ? 'bg-primary text-white'
                  : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700'
              }`}
            >
              {filterOption}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              id={project.title.toLowerCase().replace(/\s+/g, '-')}
              className="card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={handleImageError}
                  priority={index < 3} // Priorité pour les 3 premiers projets
                />
                
                {/* Gradient de fallback (visible seulement si l'image ne charge pas) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80 flex items-center justify-center hidden">
                  <span className="text-xl font-bold text-white">Projet {index + 1}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Détails supplémentaires si disponibles */}
                {project.details && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Fonctionnalités :</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Message si aucun projet ne correspond au filtre */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              Aucun projet ne correspond à ce filtre.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}