import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ]

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-darker/80 backdrop-blur-md border-b border-slate-800 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            IM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll(item.id)}
                className="text-slate-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 10 }}
                onClick={() => handleScroll(item.id)}
                className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
