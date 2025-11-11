import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function Surprise() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    confetti({ particleCount: 120, spread: 90, origin: { y: 0.4 } })
    setTimeout(() => confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } }), 500)
  }

  return (
    <section id="surprise" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">A Little Surprise</h2>
        <p className="mt-3 text-gray-600">Tap the button for sparkles</p>
        <motion.button whileTap={{scale:0.98}} whileHover={{scale:1.02}} onClick={handleOpen} className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold shadow-lg">
          Open It
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:10}} className="mt-8 rounded-3xl bg-white/70 backdrop-blur border border-white/60 p-8 shadow-2xl">
              <p className="text-lg text-gray-700">You are my favorite person in the whole universe. Thank you for being you. ✨💖</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
