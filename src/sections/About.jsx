import { motion } from 'framer-motion'
import { Target, Lightbulb, Users } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Passionate about solving complex challenges with elegant code and innovative solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies in AI, ML, and modern web development.',
    },
    {
      icon: Users,
      title: 'Collaborator',
      description: 'Strong believer in teamwork and effective communication in software development.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-darker to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Understanding my journey and passion</p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a Computer Science undergraduate at JIIT with a strong foundation in algorithms, data structures, and full-stack development. My journey in tech is driven by curiosity and the desire to create impactful solutions.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Currently focused on Machine Learning and AI, I've developed projects ranging from encrypted epigenetic predictions to innovative ride-sharing platforms. I believe in writing clean, efficient code and continuously pushing the boundaries of what's possible.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new tech stacks, contributing to open-source, or working on side projects that interest me.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="mailto:ishanmittal60@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-lg border border-indigo-500/20">
              <h3 className="text-xl font-semibold mb-4 text-white">Key Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold mt-1">•</span>
                  <span className="text-slate-300">CGPA: 7.5/10 at JIIT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold mt-1">•</span>
                  <span className="text-slate-300">Expert in Python, C/C++, and JavaScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold mt-1">•</span>
                  <span className="text-slate-300">Oracle Cloud Infrastructure GenAI Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold mt-1">•</span>
                  <span className="text-slate-300">Hackathon Participant (SIH & SDG)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center mb-4"
              >
                <feature.icon size={24} className="text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
