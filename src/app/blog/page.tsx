import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="heading">Blog</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Découvrez mes articles sur le développement web, mobile et les tendances technologiques.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <div className="card overflow-hidden hover:shadow-lg transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  {/* Replace with actual image when available */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Article à la Une</span>
                  </div>
                  {/* Uncomment when image is available 
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {new Date(blogPosts[0].date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {blogPosts[0].tags[0]}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    <Link 
                      href={`/blog/${blogPosts[0].slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {blogPosts[0].title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <Link 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="text-primary hover:text-primary-light font-medium inline-flex items-center"
                  >
                    Lire l&apos;article
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div 
              key={post.slug}
              className="card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                {/* Replace with actual image when available */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Blog</span>
                </div>
                {/* Uncomment when image is available 
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary-light font-medium inline-flex items-center"
                >
                  Lire l&apos;article
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}