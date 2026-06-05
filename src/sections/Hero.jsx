import { motion } from 'framer-motion'
import { Sparkles, Code2, Zap } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-40 right-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Greeting Badge */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="inline-block mb-6"
        >
          <div className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 flex items-center gap-2 w-fit mx-auto">
            <Sparkles size={18} className="text-indigo-400" />
            <span className="text-indigo-300">Welcome to my digital space</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ishan Mittal
          </span>
          <br />
          <span className="text-slate-300">CS Student & AI/ML Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed"
        >
          Building intelligent systems with{' '}
          <span className="text-indigo-400 font-semibold">Python</span>,{' '}
          <span className="text-purple-400 font-semibold">React</span> & <span className="text-pink-400 font-semibold">innovation</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center justify-center gap-2"
          >
            <Code2 size={20} />
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-indigo-500 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all flex items-center justify-center gap-2"
          >
            <Zap size={20} />
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { label: 'Projects', value: '4+' },
            { label: 'Certifications', value: '3+' },
            { label: 'Stack', value: '10+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-4 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-lg border border-indigo-500/20"
            >
              <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-indigo-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
