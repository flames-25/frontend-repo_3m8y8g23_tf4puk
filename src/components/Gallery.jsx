import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sampleImages = [
  'https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517249361621-f11084eb8df8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Our Tiny Gallery</h2>
        <p className="mt-3 text-center text-gray-600">Swap these with your own favorite photos</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sampleImages.map((src, idx) => (
            <motion.button key={idx} onClick={()=>setActive(src)} whileHover={{scale:1.02}} className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src={src} className="w-full h-48 object-cover" alt="memory" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-6" onClick={()=>setActive(null)}>
              <motion.img initial={{scale:0.9}} animate={{scale:1}} exit={{scale:0.9}} src={active} alt="full" className="max-h-[80vh] rounded-2xl shadow-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
