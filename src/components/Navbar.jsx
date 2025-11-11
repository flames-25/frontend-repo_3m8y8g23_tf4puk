import { Link, useLocation } from 'react-router-dom'
import { Heart, Sparkles, Gift } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      window.location.href = '/'
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mt-4 rounded-2xl bg-white/40 backdrop-blur-md shadow-lg border border-white/30">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-pink-500/10">
                <Heart className="w-5 h-5" />
              </div>
              <span className="font-semibold tracking-wide">For My Love</span>
            </button>

            <div className="hidden sm:flex items-center gap-2">
              <button onClick={() => scrollTo('memories')} className="px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors">Memories</button>
              <button onClick={() => scrollTo('letter')} className="px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors">Letter</button>
              <button onClick={() => scrollTo('gallery')} className="px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors">Gallery</button>
            </div>

            <a href="#surprise" onClick={(e)=>{e.preventDefault();scrollTo('surprise')}} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-sm font-semibold shadow-md hover:shadow-lg active:scale-[0.99] transition-all">
              <Sparkles className="w-4 h-4" />
              Open Surprise
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
