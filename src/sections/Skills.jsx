import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'C/C++', 'JavaScript', 'SQL'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'AI/ML',
      skills: ['Machine Learning', 'NLP', 'LLMs', 'Oracle Cloud AI', 'OpenAI API'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Web Development',
      skills: ['React.js', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Developer Tools',
      skills: ['Git', 'VS Code', 'Jupyter Notebook', 'Figma'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Databases & Cloud',
      skills: ['MongoDB', 'MySQL', 'Oracle Cloud', 'REST APIs'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      category: 'Specializations',
      skills: ['Cryptography', 'Data Structures', 'Algorithms', 'Backend Development'],
      color: 'from-pink-500 to-rose-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-slate-900 to-darker">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg">A diverse technical toolkit built through hands-on experience</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group/item"
                  >
                    <span className="text-indigo-400 opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                    <span className="text-slate-300 group-hover/item:text-white transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className={`mt-4 h-1 rounded-full bg-gradient-to-r ${category.color} origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 p-8 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-lg border border-indigo-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Proficiency Overview</h3>
          <div className="space-y-4">
            {[
              { label: 'Problem Solving & Algorithms', progress: 95 },
              { label: 'Python & C++ Development', progress: 90 },
              { label: 'Machine Learning & AI', progress: 85 },
              { label: 'Web Development & Frontend', progress: 80 },
              { label: 'Database Design & Management', progress: 80 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="text-indigo-400 font-semibold">{item.progress}%</span>
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="w-full h-2 bg-slate-700 rounded-full overflow-hidden origin-left"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-pink-500"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
