// src/components/Navbar.jsx
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaRocket, FaHome, FaUser, FaProjectDiagram, FaTools, FaAward,
  FaLinkedin, FaGithub
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Navbar() {
  const items = [
    { icon: <FaHome />,           to: '#hero'     },
    { icon: <FaUser />,           to: '#about'    },
    { icon: <FaTools />,          to: '#skills'   },
    { icon: <FaProjectDiagram />, to: '#projects' },
    { icon: <FaAward />,          to: '#badges'   },
  ]

  const utilities = [
    { icon: <HiOutlineMail />,   href: 'mailto:dimitrios.gogos@proton.me' },
    { icon: <FaLinkedin />,      href: 'https://www.linkedin.com/in/dimitrios-gogos-57a1b7231/' },
    { icon: <FaGithub />,        href: 'https://github.com/JimGk' },
  ]

  return (
    <>
      {/* Mobile: bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md flex justify-around py-2 sm:hidden z-50">
        {items.map(({ icon, to }) => (
          <a
            key={to}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl"
          >
            {icon}
          </a>
        ))}
      </nav>

      {/* Desktop: left sidebar */}
      <nav className="hidden sm:flex fixed inset-y-0 left-0 w-24 bg-gray-900/90 backdrop-blur-md flex-col items-center py-6 z-50">
        {/* Brand */}
        <motion.button
          whileTap={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-white text-3xl"
          aria-label="Brand"
        >
          <FaRocket />
        </motion.button>

        {/* Sections */}
        <div className="flex-1 flex flex-col items-center space-y-6">
          {items.map(({ icon, to }) => (
            <a
              key={to}
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Utilities */}
        <div className="flex flex-col items-center space-y-4 mt-6">
          {utilities.map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl"
            >
              {icon}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}