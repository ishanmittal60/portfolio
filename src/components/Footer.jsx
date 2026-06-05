import { motion } from 'framer-motion'
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:ishanmittal60@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-darker border-t border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-2">
              Ishan Mittal
            </h3>
            <p className="text-slate-400">CS Student | ML/AI Enthusiast</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 transition-colors"
                  title={link.label}
                >
                  <link.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© {currentYear} Ishan Mittal. All rights reserved. | Crafted with passion & code</p>
        </div>
      </div>
    </footer>
  )
}
