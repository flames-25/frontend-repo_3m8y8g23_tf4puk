import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Memories from './components/Memories'
import Letter from './components/Letter'
import Gallery from './components/Gallery'
import Surprise from './components/Surprise'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-white text-gray-900">
      <Navbar />
      <Hero />
      <main>
        <Memories />
        <Letter />
        <Gallery />
        <Surprise />
      </main>
      <footer className="py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-gray-500">Made with endless love and sparkles ✨</p>
        </div>
      </footer>
    </div>
  )
}

export default App
