import { motion } from 'framer-motion'
import { Sparkles, Camera, Music, Heart } from 'lucide-react'

const memoryCards = [
  {
    title: 'First Coffee Date',
    desc: 'The way you smiled over that latte art. My heart did a little spin. ☕️💖',
    icon: Camera,
    gradient: 'from-pink-200 via-rose-200 to-fuchsia-200'
  },
  {
    title: 'Our Playlist',
    desc: "Every song reminds me of your laugh and those late-night chats. 🎶",
    icon: Music,
    gradient: 'from-fuchsia-200 via-violet-200 to-indigo-200'
  },
  {
    title: 'Warm Hugs',
    desc: 'When you hug me, the world fades and I feel home. 🤍',
    icon: Heart,
    gradient: 'from-rose-200 via-pink-200 to-amber-200'
  },
]

export default function Memories() {
  return (
    <section id="memories" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#fdf2f8,_transparent_50%)]"></div>
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="text-center mb-12">
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Little Moments, Big Feelings</motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-3 text-gray-600">A few sparkly snippets of us ✨</motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memoryCards.map((m, idx) => (
            <motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.4}} transition={{delay: idx * 0.05}} className="group relative rounded-3xl p-1 bg-gradient-to-br from-white to-white/60 backdrop-blur border border-white/50 shadow-xl">
              <div className={`rounded-2xl p-6 bg-gradient-to-br ${m.gradient} min-h-[200px] flex flex-col`}>
                <div className="flex items-center gap-3">
                  <div className="inline-flex w-10 h-10 items-center justify-center rounded-2xl bg-white/60">
                    <m.icon className="w-5 h-5 text-pink-700" />
                  </div>
                  <h3 className="text-lg font-bold text-pink-800">{m.title}</h3>
                </div>
                <p className="mt-3 text-pink-900/80">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
