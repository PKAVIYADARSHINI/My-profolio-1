import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Sparkles } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-cyan-500/30 flex items-center justify-center overflow-hidden">
                <div className="text-cyan-400 text-9xl font-bold">KD</div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300"
          >
            <p className="text-lg leading-relaxed mb-6">
              Hi! I'm <span className="text-cyan-400 font-semibold">Kaviya Darshini</span>, an aspiring Full Stack Developer
              and UX Designer with a passion for creating beautiful, user-focused digital experiences.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Currently pursuing my Bachelor's in <span className="text-blue-400 font-semibold">Artificial Intelligence & Data Science</span> (Expected 2025),
              I blend technical development skills with creative design thinking to build impactful solutions.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              I specialize in React with TypeScript, UI/UX design, and am continuously learning new technologies
              to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-4 text-center hover:bg-cyan-500/10 transition-all">
                <Code2 className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm font-semibold">Full Stack Dev</p>
              </div>
              <div className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-4 text-center hover:bg-blue-500/10 transition-all">
                <Palette className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-semibold">UX Designer</p>
              </div>
              <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-4 text-center hover:bg-purple-500/10 transition-all">
                <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-sm font-semibold">AI Enthusiast</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
