import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00ffff"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />

      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            P. Kaviya Darshini
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl text-gray-300 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Aspiring Full Stack Developer & UX Designer
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building user-focused digital experiences with React, TypeScript, and modern design principles
          </motion.p>

          <motion.div
            className="flex gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://github.com/PKAVIYADARSHINI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-cyan-400" />
            </a>
            <a
              href="https://linkedin.com/in/kaviyadarshini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-cyan-400" />
            </a>
            <a
              href="mailto:kavyadarshini006@gmail.com"
              className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6 text-cyan-400" />
            </a>
            <a
              href="https://medium.com/@kavyadarshini006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-all hover:scale-110"
            >
              <FileText className="w-6 h-6 text-cyan-400" />
            </a>
          </motion.div>

          <motion.a
            href="#about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Explore My Work
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};
