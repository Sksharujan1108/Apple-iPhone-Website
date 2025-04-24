import React from 'react'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Highlights from './component/highlights'
import Model from './component/model'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model />
    </main>
  )
}

export default App;