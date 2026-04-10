import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Checklist } from './components/Checklist'
import { Resources } from './components/Resources'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Checklist />
      <Resources />
      <Footer />
    </div>
  )
}

export default App
