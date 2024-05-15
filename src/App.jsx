import React from 'react'
import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import About from './Component/About'
import Project from './Component/Project'
import Socialbar from './Component/Socialbar'
import Footer from './Component/Footer'

function App() {
  return (

    <div>
      <Navbar />
      <Socialbar />
      <Landing />
      <About />
      <Project />
      <Footer />
    </div>
  )
}

export default App