import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Model from './components/Model'
import Features from './components/Features'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-black'>
    <Navbar/>
    <Hero/>
    <Highlight/>
    <Model/>
    <HowItWorks/>
    <Features/>
    
    <Footer/>
    </main>
  )
}

export default App
