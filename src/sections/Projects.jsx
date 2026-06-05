import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Encrypted Epigenetic Prediction Platform',
      description: 'An end-to-end ML pipeline for epigenetic data with 92% prediction accuracy and privacy-preserving encrypted inference capabilities.',
      tags: ['Python', 'Machine Learning', 'Streamlit', 'Encryption', 'Privacy'],
      highlights: [
        '92% prediction accuracy',
        'Encrypted inference (no decryption)',
        'Secure CSV upload & storage',
      ],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'CampusCab - Ride Sharing Platform',
      description: 'Peer-to-peer ride-sharing platform with automated group allocation and optimized matching algorithms.',
      tags: ['React', 'C++', 'Backend', 'Algorithms', 'Real-time'],
      highlights: [
        '40% efficiency improvement',
        '4-seat group allocation',
        'Real-time seat availability',
      ],
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'Secure Steganography App',
      description: 'Advanced steganography system with AES encryption for secure message embedding into images using LSB encoding.',
      tags: ['Python', 'Streamlit', 'AES', 'Cryptography', 'Image Processing'],
      highlights: [
        '35% speed optimization',
        'Two-layer security',
        'User-friendly interface',
      ],
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-24 px-4 bg-darker relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Showcasing my technical expertise and creative solutions</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group rounded-lg border ${project.borderColor} bg-gradient-to-br ${project.color} p-6 backdrop-blur-sm transition-all hover:border-opacity-100`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white leading-tight flex-1">{project.title}</h3>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink size={20} className="text-indigo-400" />
                </motion.div>
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

              {/* Highlights */}
              <div className="space-y-2 mb-4 pb-4 border-b border-slate-700">
                {project.highlights.map((highlight, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {highlight}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-2 py-1 rounded-full bg-slate-800/50 text-indigo-300 border border-indigo-500/30"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
