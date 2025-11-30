import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import Section from './ui/Section';

const Projects: React.FC = () => {
  const { title, projects_list } = PORTFOLIO_DATA.sections.projects;

  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          {title}
        </h2>
        <div className="w-24 h-1 bg-neonBlue mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects_list.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-neonBlue/50 transition-all duration-300 shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
              <img 
                src={project.screenshot} 
                alt={project.project_title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neonBlue transition-colors">
                {project.project_title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm h-12 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools_used.map((tool, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a 
                  href={project.project_link}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-neonBlue/10 text-neonBlue font-semibold hover:bg-neonBlue hover:text-black transition-all"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a 
                  href="#" // Assuming GitHub link isn't explicitly in the object structure but usually present
                  className="p-3 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all border border-white/10"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;