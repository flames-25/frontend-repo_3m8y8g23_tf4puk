import { motion } from 'framer-motion'

export default function Letter() {
  return (
    <section id="letter" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-3xl bg-white/70 backdrop-blur border border-white/60 shadow-2xl p-8">
          <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-3xl sm:text-4xl font-extrabold text-pink-700">A Letter To You</motion.h2>
          <p className="mt-5 text-gray-700 leading-8">
            From the first moment I met you, my days grew brighter and my heart softer. You are the little spark in every ordinary thing, the melody in every quiet moment, the smile I look forward to every day.
          </p>
          <p className="mt-4 text-gray-700 leading-8">
            Thank you for your warmth, your laughter, your patience, and your magic. I love you more than words know how to say — and somehow, each day, I love you even more.
          </p>
          <p className="mt-4 text-gray-700 leading-8">
            Happy birthday, my love. Here’s to all our tomorrows, hand in hand. 💖
          </p>
          <div className="mt-6 text-right">
            <span className="inline-block text-pink-600 font-semibold">Forever yours</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
