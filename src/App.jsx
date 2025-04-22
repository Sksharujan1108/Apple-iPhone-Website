import React from 'react'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Highlights from './component/highlights'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
    </main>
  )
}

export default App;