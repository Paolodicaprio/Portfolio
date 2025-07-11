import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/data';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading">Projets à la Une</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et significatifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="card bg-slate-800 hover:bg-slate-800/80 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
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
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-slate-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* "Voir plus" link removed as per requirements */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="btn-outline text-white border-white/20 hover:bg-white/10"
          >
            Voir Tous les Projets
          </Link>
        </div>
      </div>
    </section>
  );
}