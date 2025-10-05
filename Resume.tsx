import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

export const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8" />

          <motion.a
            href="/Kaviya_Darshini_Resume (1).pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-cyan-500 pl-4">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                    Bachelor of Technology
                  </h4>
                  <p className="text-gray-300 mb-1">Artificial Intelligence & Data Science</p>
                  <p className="text-gray-500 text-sm">Expected 2025</p>
                </div>

                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    12th Grade
                  </h4>
                  <p className="text-gray-300 mb-1">Savior Jesus Matriculation Higher Secondary School</p>
                  <p className="text-gray-500 text-sm">70%</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>

              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">
                  Web Developer & Designer Intern
                </h4>
                <p className="text-cyan-400 mb-2">Cognitive Value Tech</p>
                <p className="text-gray-500 text-sm mb-3">Nov 2024 - Present | Chennai, Tamil Nadu</p>

                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Designed and developed user-centric interfaces for HawkEye internal system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Built responsive UI components in React & TypeScript, reducing load time by 20%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Integrated RESTful APIs for seamless data flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Reduced user errors by 15% through optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500 transition-all">
                <p className="text-cyan-400 font-semibold">TATA Data Visualization</p>
                <p className="text-gray-500 text-sm">Forage</p>
              </div>

              <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 hover:border-blue-500 transition-all">
                <p className="text-blue-400 font-semibold">AI for Women</p>
                <p className="text-gray-500 text-sm">GUVI</p>
              </div>

              <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4 hover:border-purple-500 transition-all">
                <p className="text-purple-400 font-semibold">Accenture Developer Virtual Experience</p>
                <p className="text-gray-500 text-sm">Accenture</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
