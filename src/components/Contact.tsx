import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:kavyadarshini006@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg">Let's collaborate and build something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <a
                href="mailto:kavyadarshini006@gmail.com"
                className="flex items-start gap-4 p-4 bg-gray-800/50 border border-cyan-500/30 rounded-lg hover:border-cyan-500 transition-all group"
              >
                <Mail className="w-6 h-6 text-cyan-400 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">kavyadarshini006@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917358231675"
                className="flex items-start gap-4 p-4 bg-gray-800/50 border border-blue-500/30 rounded-lg hover:border-blue-500 transition-all group"
              >
                <Phone className="w-6 h-6 text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+91 7358231675</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-gray-800/50 border border-purple-500/30 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/PKAVIYADARSHINI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-all hover:scale-110"
              >
                <Github className="w-6 h-6 text-cyan-400" />
              </a>
              <a
                href="https://linkedin.com/in/kaviyadarshini"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
              </a>
              <a
                href="https://medium.com/@kavyadarshini006"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg transition-all hover:scale-110"
              >
                <FileText className="w-6 h-6 text-purple-400" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
