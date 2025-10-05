import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'AI-Powered News Authenticity Classifier',
    description: 'Built a machine learning model in Python to classify news articles as real or fake, improving detection accuracy using NLP techniques and Gradient Boosting Classifier.',
    tech: ['Python', 'Machine Learning', 'NLP', 'Gradient Boosting'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'HawkEye - Sales Incentive System',
    description: 'Designed and developed frontend to track employee revenue and sales incentives. Implemented responsive layouts using React with TypeScript and styled components.',
    tech: ['React', 'TypeScript', 'Responsive Design', 'UI/UX'],
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website featuring 3D animations, smooth transitions, and a futuristic design aesthetic built with React, TypeScript, and Three.js.',
    tech: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    gradient: 'from-purple-500 to-pink-500',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

      <div className="p-6 relative z-10">
        <div className={`w-full h-48 mb-6 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-6xl font-bold opacity-80`}>
          {project.title.charAt(0)}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-900/50 border border-cyan-500/30 text-cyan-400 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700 text-white rounded-lg hover:border-cyan-500 transition-all"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
