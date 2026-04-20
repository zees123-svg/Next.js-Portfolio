"use client";
import { projects } from "@/lib/data";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const [imgError, setImgError] = useState(false);
              return(
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden">
                    {project.image && !imgError ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => setImgError(true)}
                      />
                      ) : (
                      // Fallback emoji if image missing or error
                      <span className="text-6xl">{project.icon}</span>
                    )}
                  </div>
              
                  <div className="p-4 sm:p-6 flex flex-col grow">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base line-clamp-3">
                      {project.description}
                    </p>
                
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 sm:py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                
                    <div className="flex gap-4 mt-auto">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm sm:text-base">
                        <FiGithub className="text-base sm:text-lg" /> Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors text-sm sm:text-base">
                        <FiExternalLink className="text-base sm:text-lg" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}