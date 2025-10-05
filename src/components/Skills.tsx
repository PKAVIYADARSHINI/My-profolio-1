import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const SkillCube = ({ position }: { position: [number, number, number] }) => {
  return (
    <Box position={position} args={[1, 1, 1]}>
      <meshStandardMaterial color="#00ffff" wireframe />
    </Box>
  );
};

const SkillCard = ({ skill, delay }: { skill: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20"
    >
      <p className="text-white font-semibold text-lg">{skill}</p>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
    'SQL Server', 'Python', 'Java', 'Git', 'GitHub',
    'Figma', 'Adobe XD', 'Photoshop', 'Microsoft Azure', 'VS Code'
  ];

  const softSkills = [
    'Time Management', 'Teamwork', 'Communication', 'Problem Solving',
    'UI/UX Design', 'Wireframing', 'Prototyping', 'Responsive Design'
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SkillCube position={[-2, 0, 0]} />
          <SkillCube position={[2, 0, 0]} />
          <SkillCube position={[0, 2, 0]} />
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
        </motion.div>

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-cyan-400 mb-8 text-center"
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill} skill={skill} delay={index * 0.05} />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-blue-400 mb-8 text-center"
          >
            Soft Skills & Design
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <SkillCard key={skill} skill={skill} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
