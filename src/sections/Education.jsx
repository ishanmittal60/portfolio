import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'

export default function Education() {
  const education = {
    degree: 'Bachelor of Technology in Computer Science',
    university: 'Jaypee Institute of Information Technology (JIIT)',
    location: 'Noida, Uttar Pradesh',
    duration: 'July 2023 – May 2027',
    cgpa: '7.5 / 10',
    description: 'Focused on computer science fundamentals, algorithms, data structures, and emerging technologies in AI/ML. Active participant in academic projects and hackathons.',
  }

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle Cloud',
      year: '2025',
      icon: '🏆',
    },
    {
      title: 'Machine Learning',
      issuer: 'Andrew Ng (Coursera)',
      year: '2024',
      icon: '🤖',
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'GeeksforGeeks',
      year: '2023',
      icon: '📊',
    },
  ]

  const achievements = [
    {
      title: 'Smart India Hackathon Participant',
      description: 'Competed at national level showcasing problem-solving skills',
    },
    {
      title: 'SDG 9 Hackathon Participant',
      description: 'Participated in Hackathon on Sustainable Development Goal 9 (Innovation & Infrastructure)',
    },
  ]

  return (
    <section id="education" className="py-24 px-4 bg-darker">
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
              Education & Achievements
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Building a strong foundation for innovation</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <BookOpen size={28} className="text-white" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{education.degree}</h3>
                <p className="text-indigo-400 font-semibold">{education.university}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-slate-200">{education.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-sm">Duration</p>
                  <p className="text-slate-200">{education.duration}</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-4 rounded-lg border border-indigo-500/20">
                <p className="text-slate-400 text-sm mb-1">CGPA</p>
                <p className="text-3xl font-bold text-indigo-400">{education.cgpa}</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">{education.description}</p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award size={28} className="text-indigo-400" />
              Certifications
            </h3>

            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, x: 5 }}
                className="p-4 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-lg border border-indigo-500/20 hover:border-indigo-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                    <p className="text-xs text-indigo-400 mt-1">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg"
              >
                <span className="text-2xl">⭐</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                  <p className="text-slate-400 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
