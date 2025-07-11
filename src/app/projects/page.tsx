import { projects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage() {
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

        {/* Project Filters - Will be client component */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            className="px-4 py-2 rounded-md bg-primary text-white"
          >
            Tous
          </button>
          <button
            className="px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            Frontend
          </button>
          <button
            className="px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            Backend
          </button>
          <button
            className="px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            Mobile
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              id={project.title.toLowerCase().replace(/\s+/g, '-')}
              className="card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                {/* Replace with actual images when available */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Projet {index + 1}</span>
                </div>
                {/* Uncomment when images are available 
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
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
                {/* "Voir le projet" link removed as per requirements */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}