
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/Skills'
import Projects from './components/projects'
import Contact from './components/contact'
import React from 'react'


function App() {
 

  return (
    <>
      <div className='min-h-screen w-screen bg-gradient-to-br from-slate-600 via-gray-800 to-zinc-900'>

        {/* navbar */}
        <div  className='items-center justify-center flex  sticky top-0 z-10'>
          <Navbar />
        </div>

        {/* home */}
        <div id='home' >
          <Home />
        </div>

      
        {/* about */}
        <div id='about' className='pt-20'>
          <About />
        </div>

        {/* skills */}
        <div id='skills' >
          <Skills />
        </div>



        {/* projects */}
        <div id='projects' >
          <Projects />
        </div>

        {/* contact */}
        <div id='contact' >
          <Contact />
        </div>

        
        {/* footer */}
        <footer className='bg-gray-950 text-white p-4 text-center'>
          &copy; Samir Tiwari. 
        </footer>

      </div>
    </>
  )
}

export default App
