import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ishanmittal60@gmail.com',
      href: 'mailto:ishanmittal60@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '6377162515',
      href: 'tel:6377162515',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Noida, India',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-slate-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:ishanmittal60@gmail.com',
      color: 'hover:text-red-400',
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-darker to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

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
              Let's Get In Touch
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            I'm always interested in hearing about new projects and opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Whether you have a project idea, want to collaborate, or just want to chat about tech, feel free to reach out! I'm always excited to connect with fellow developers and enthusiasts.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target={info.href?.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <info.icon size={24} className="text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-indigo-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-indigo-400 transition-all ${link.color}`}
                    title={link.label}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-lg border border-indigo-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-green-500/20 border border-green-500/50 rounded-lg text-center"
              >
                <h4 className="text-green-400 font-semibold mb-2">Thank you! ✨</h4>
                <p className="text-slate-300">Your message has been received. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center p-8 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-lg border border-indigo-500/30"
        >
          <p className="text-slate-300 text-lg mb-4">
            Ready to work together? Let's create something amazing!
          </p>
          <motion.a
            href="mailto:ishanmittal60@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
          >
            <Mail size={18} />
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
