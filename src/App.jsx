import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import './index.css'

function App() {

  return (
    <div className="min-h-screen bg-charcoal text-parchment">
      <Intro />
      <About />
      <Projects />
    </div>
  )
}

export default App
